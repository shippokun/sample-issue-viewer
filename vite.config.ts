import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
/**
 * @type {import('vite').UserConfig}
 */
export default ({ mode }) => {
  return defineConfig({
    plugins: [vue()],
    base: mode == "production" ? "/sample-issue-viewer/" : "/",
  });
};
