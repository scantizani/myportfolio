import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/myportfolio/",
  build: {
    outDir: "dist",
  },
});
