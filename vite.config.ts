import { sveltekit } from "@sveltejs/kit/vite";
import { nodeLoaderPlugin } from "@vavite/node-loader/plugin";
import Icons from "unplugin-icons/vite";
import { defineConfig } from "vitest/config";

export default defineConfig(({ mode }) => ({
  plugins: [
    ...(mode === "development" ? [nodeLoaderPlugin()] : []),
    sveltekit(),
    Icons({
      compiler: "svelte",
    }),
  ],
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"],
  },
}));
