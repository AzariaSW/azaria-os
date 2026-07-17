import fs from "fs/promises";
import path from "path";

export async function deleteFile(filePath) {
  if (!filePath) {
    return;
  }

  try {
    const absolutePath = path.resolve(
      process.cwd(),
      filePath.startsWith("/")
        ? filePath.slice(1)
        : filePath,
    );

    await fs.unlink(absolutePath);
  } catch (error) {
    // Ignore missing files
    if (error.code !== "ENOENT") {
      throw error;
    }
  }
}