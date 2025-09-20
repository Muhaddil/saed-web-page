import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { quasar } from "@quasar/vite-plugin";

export default defineConfig({
  base: "/saed-web-page/",
  plugins: [vue(), quasar()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    chunkSizeWarningLimit: 5000,
    rollupOptions: {
      input: [
        "index.html",
        "faq.html",
        "sams.html",
        "sapdhome.html",
        "promotions.html",
        "contact.html",
        "safd.html",
        "divisionssapd.html",
        "photoweek.html",
        "workers.html",
        "salaries.html",
      ],
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
          if (id.endsWith(".css")) {
            return "styles";
          }
          return undefined;
        },
      },
    },
  },
});
