import JsonLd from "./JsonLd";
import { pageGraph, type PagePath } from "../lib/seo";

export default function PageSeo({ path }: { path: PagePath }) {
  return <JsonLd data={pageGraph(path)} />;
}
