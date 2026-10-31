import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";
import ts from "typescript";

const code = ts.transpileModule(readFileSync("app/lib/seo.ts", "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;
const seo = {};
runInNewContext(code, { exports: seo, URL, process: { env: { NEXT_PUBLIC_SITE_URL: "https://agency.example/" } } });
const { SEO_PAGES, SITE, OG_IMAGE_PATH, pageMetadata, pageBreadcrumbs, pageGraph, siteGraph, serializeJsonLd } = seo;

test("every public page has unique metadata, a self canonical, and working share image", () => {
  const titles = new Set();
  const descriptions = new Set();
  assert.equal(SITE.url, "https://agency.example");
  assert.ok(existsSync(`app${OG_IMAGE_PATH}`));
  for (const [path, page] of Object.entries(SEO_PAGES)) {
    assert.ok(existsSync(`app${path === "/" ? "" : path}/page.tsx`), path);
    const meta = pageMetadata(path);
    const url = new URL(path, SITE.url).href;
    assert.equal(meta.alternates.canonical, url);
    assert.equal(meta.openGraph.url, url);
    assert.equal(meta.openGraph.title, `${page.title} | ${SITE.name}`);
    assert.equal(meta.twitter.images[0].url, `${SITE.url}${OG_IMAGE_PATH}`);
    const documentTitle = typeof meta.title === "string" ? `${meta.title} | ${SITE.name}` : meta.title.absolute;
    assert.equal(documentTitle, meta.openGraph.title);
    assert.equal(titles.has(documentTitle), false, `Duplicate title: ${path}`);
    assert.equal(descriptions.has(meta.description), false, `Duplicate description: ${path}`);
    titles.add(documentTitle);
    descriptions.add(meta.description);
  }
});

test("page schemas describe the current page and reference its breadcrumb trail", () => {
  for (const path of Object.keys(SEO_PAGES)) {
    const graph = pageGraph(path)["@graph"];
    const page = graph[0];
    const url = new URL(path, SITE.url).href;
    assert.equal(page.url, url);
    assert.equal(page["@id"], `${url}#webpage`);
    assert.equal(page.description, SEO_PAGES[path].description);
    assert.equal(new Set(graph.map(node => node["@id"])).size, graph.length);
    const crumbs = graph.find(node => node["@type"] === "BreadcrumbList");
    if (path === "/") assert.equal(crumbs, undefined);
    else {
      assert.equal(page.breadcrumb["@id"], crumbs["@id"]);
      assert.equal(crumbs.itemListElement.at(-1).item, url);
      assert.equal(crumbs.itemListElement[0].item, `${SITE.url}/`);
    }
  }
  assert.equal(pageGraph("/contact")["@graph"][0]["@type"], "ContactPage");
});

test("service schemas connect each service to Vellora without invented offers or ratings", () => {
  for (const path of ["/services/websites", "/services/apps", "/services/ai", "/services/seo"]) {
    const graph = pageGraph(path)["@graph"];
    const service = graph.find(node => node["@type"] === "Service");
    assert.equal(service.provider["@id"], `${SITE.url}/#organization`);
    assert.equal(graph[0].mainEntity["@id"], service["@id"]);
    assert.equal(service.offers, undefined);
    assert.equal(service.aggregateRating, undefined);
    assert.deepEqual(JSON.parse(JSON.stringify(pageBreadcrumbs(path).map(item => item.path))), ["/", "/services", path]);
  }
  assert.deepEqual(JSON.parse(JSON.stringify(pageBreadcrumbs("/work/ecotone").map(item => item.path))), ["/", "/work", "/work/ecotone"]);
});

test("organization uses the supplied LinkedIn identity and real image paths", () => {
  const org = siteGraph()["@graph"][0];
  assert.equal(org["@type"], "Organization");
  assert.equal(org.sameAs[0], "https://www.linkedin.com/showcase/vellora-agency");
  assert.equal(org.image, `${SITE.url}${OG_IMAGE_PATH}`);
  assert.ok(existsSync(`app${new URL(org.logo.url).pathname}`));
  assert.equal(org.address, undefined);
});

test("JSON-LD escapes script endings while preserving its data", () => {
  const data = { description: "</script><script>alert('test')</script>" };
  const serialized = serializeJsonLd(data);
  assert.equal(serialized.includes("<"), false);
  assert.deepEqual(JSON.parse(serialized), data);
});

test("sitemap covers the shared page registry and does not fabricate modification dates", () => {
  const sitemapCode = ts.transpileModule(readFileSync("app/sitemap.ts", "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  }).outputText;
  const exports = {};
  runInNewContext(sitemapCode, { exports, URL, require: () => seo });
  const entries = exports.default();
  assert.equal(entries.length, Object.keys(SEO_PAGES).length);
  for (const entry of entries) {
    assert.equal(entry.lastModified, undefined);
    assert.ok(SEO_PAGES[new URL(entry.url).pathname]);
  }
});
