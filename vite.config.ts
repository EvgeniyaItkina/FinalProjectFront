import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": { target: "https://finalprojectserver-enmw.onrender.com", changeOrigin: true },
      "/image": { target: "https://finalprojectserver-enmw.onrender.com", changeOrigin: true },
    },
  },
});