import { PassThrough } from "stream";
import * as fs from "fs-extra";

export async function createImageStream() {
    // Read image to buffer
    const imageBuffer = await fs.readFile("./examples/image.png");
  
    // Create a PassThrough stream from buffer with proper file metadata
    const imageStream = new PassThrough();
    imageStream.end(imageBuffer);
  
    // Add file metadata that FormData library expects
    Object.assign(imageStream, {
      path: "./examples/image.png",
      filename: "image.png",
      mimetype: "image/png"
    });
  
    return imageStream;
  }
