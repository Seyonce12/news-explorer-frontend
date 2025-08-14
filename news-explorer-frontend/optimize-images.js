import sharp from "sharp";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, "src", "assets");

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (![".jpg", ".jpeg", ".png", ".webp"].includes(ext)) return;

  try {
    const originalBuffer = await fs.readFile(filePath);
    const originalSize = originalBuffer.length;

    let pipeline = sharp(originalBuffer);

    if (ext === ".jpg" || ext === ".jpeg") {
      pipeline = pipeline.jpeg({ quality: 85, mozjpeg: true, chromaSubsampling: "4:4:4" });
    } else if (ext === ".png") {
      pipeline = pipeline.png({ quality: 80, compressionLevel: 9, palette: true });
    }

    const optimizedBuffer = await pipeline.toBuffer();
    const optimizedSize = optimizedBuffer.length;

    if (optimizedSize < originalSize) {
      await fs.writeFile(filePath, optimizedBuffer);
      console.log(`Optimized ${filePath}: ${(originalSize/1024).toFixed(1)}KB → ${(optimizedSize/1024).toFixed(1)}KB`);
    } else {
      console.log(`No improvement for ${filePath}`);
    }
  } catch (err) {
    console.error(`Error optimizing ${filePath}:`, err);
  }
}

async function processDirectory(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        await processDirectory(fullPath);
      } else {
        await optimizeImage(fullPath);
      }
    })
  );
}

console.log("Optimizing images...");
processDirectory(assetsDir).then(() => console.log("Done!"));
