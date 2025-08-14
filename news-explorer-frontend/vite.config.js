import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { readdirSync, copyFileSync, mkdirSync, existsSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";



// Control verbose output with env var:
// default: silent. To enable: COPY_ASSETS_VERBOSE=1 npm run dev
const VERBOSE = Boolean(process.env.COPY_ASSETS_VERBOSE && process.env.COPY_ASSETS_VERBOSE !== "0");

// Copy assets from public to src/assets
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicImagesDir = join(__dirname, "public/assets/images");
const srcAssetsDir = join(__dirname, "src/assets");

// Create src/assets directory if it doesn't exist
if (!existsSync(srcAssetsDir)) {
  mkdirSync(srcAssetsDir, { recursive: true });
}

// Copy image files (silent by default)
try {
  const files = readdirSync(publicImagesDir);
  files.forEach((file) => {
    const srcPath = join(publicImagesDir, file);
    const destPath = join(srcAssetsDir, file);
    copyFileSync(srcPath, destPath);
    if (VERBOSE) {
      console.log(`Copied ${file} to src/assets`);
    }
  });
} catch (error) {
  // Show errors — we still want to know if copy fails
  console.error("Error copying assets:", error);
}

export default defineConfig({
  plugins: [react()],
  base: "/news-explorer-frontend/",
  server: {
    port: 3000, // Change the default port
  },
  build: {
    assetsInlineLimit: 0, // Disable inlining assets
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
  },
  publicDir: "public", // Ensure public directory is copied to build
});
