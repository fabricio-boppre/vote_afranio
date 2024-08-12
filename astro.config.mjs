import { defineConfig } from "astro/config";
import pageInsight from "astro-page-insight";

import metaTags from "astro-meta-tags";

// https://astro.build/config
export default defineConfig({
  site: "https://vote.afranio.org.br",
  integrations: [pageInsight(), metaTags()]
});