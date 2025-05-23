import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { quasar } from "@quasar/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/saed-web-page/",
  plugins: [vue(), quasar()],
  build: {
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
      ],
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
