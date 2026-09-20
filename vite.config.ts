import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";
import pageMetadata from "./site-metadata.json";

function siteMetadata(development: boolean): Plugin {
  const home = pageMetadata["/"];
  const adsId = process.env.VITE_GOOGLE_ADS_ID || process.env.GOOGLE_ADS_ID || "";
  const tagSnippet = adsId
    ? `<script async src="https://www.googletagmanager.com/gtag/js?id=${adsId}"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${adsId}');</script>`
    : `<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}</script>`;

  const values = {
    __SITE_MODE__: "portfolio",
    __SITE_ROBOTS__: "index, follow",
    __SITE_STYLE_SRC__: development ? "style-src 'self' 'unsafe-inline'" : "style-src 'self'",
    __SITE_TITLE__: home.title,
    __SITE_DESCRIPTION__: home.description,
    __SITE_TAG_SNIPPET__: tagSnippet,
  };

  return {
    name: "site-metadata",
    transformIndexHtml(html) {
      return Object.entries(values).reduce(
        (result, [token, value]) => result.replaceAll(token, value),
        html,
      );
    },
  };
}

export default defineConfig(({ command }) => ({
  plugins: [siteMetadata(command === "serve"), react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    sourcemap: true,
    outDir: "dist",
    emptyOutDir: true,
  },
}));
