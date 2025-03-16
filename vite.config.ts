import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Crash test pwa",
        short_name: "pwa",
        description: "My awesome crash test pwa built with Vite and React!",
        theme_color: "#ffffff",
        icons: [
          {
            src: "./src/assets/icon.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
      devOptions: {
        enabled: true, // Enables PWA in development mode
      },
    }),
  ],
});
