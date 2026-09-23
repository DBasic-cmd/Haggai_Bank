import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    include: ["lucide-react"],
  },
  build: {
    rollupOptions: {
      // Ensures Vite/Rolldown handles lucide-react resolution properly during build
      external: [],
    },
  },
  resolve: {
    alias: {
      // Points explicitly to the CJS or ESM bundle if the default fails
      "lucide-react": "lucide-react/dist/esm/lucide-react.js",
    },
  },
});