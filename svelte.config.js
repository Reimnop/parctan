import adapter from "@sveltejs/adapter-node";
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  vitePlugin: {
    inspector: true,
  },
  kit: {
    adapter: adapter({
      precompress: true,
    }),
    alias: {
      $components: "src/lib/components",
      "$components/*": "src/lib/components/*",
      $assets: "src/lib/assets",
      "$assets/*": "src/lib/assets/*",
    },
  },
};

export default config;
