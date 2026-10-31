import Link from "next/link";
import JsonLd from "./JsonLd";
import { pageBreadcrumbs, pageGraph, type PagePath } from "../lib/seo";

export default function PageSeo({ path }: { path: PagePath }) {
  const items = pageBreadcrumbs(path);
  return (
    <>
      <JsonLd data={pageGraph(path)} />
      {path !== "/" && (
        <nav aria-label="Breadcrumb" className="mx-auto mb-6 max-w-6xl px-6 text-xs text-neutral-600 lg:px-10">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-2">
            {items.map((item, index) => (
              <li key={item.path} className="inline-flex items-center gap-2">
                {index > 0 && <span aria-hidden="true">/</span>}
                {index === items.length - 1 ? <span aria-current="page">{item.name}</span> : <Link href={item.path} className="inline-flex min-h-6 items-center underline underline-offset-4 hover:text-[#3054ff]">{item.name}</Link>}
              </li>
            ))}
          </ol>
        </nav>
      )}
    </>
  );
}
