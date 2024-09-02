import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        // target: 'http://localhost:3000',

        target: "https://mern-blogg-6mzg.onrender.com",
        changeOrigin: true, // Needed to change the origin of the host header to the target URL
        secure: true,
      },
    },
  },
  plugins: [react()],
});
