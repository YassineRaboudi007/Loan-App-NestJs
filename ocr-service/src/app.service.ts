import { Injectable } from '@nestjs/common';
import * as tesseract from 'node-tesseract-ocr';

@Injectable()
export class OcrService {
  config = {
    lang: 'eng',
    oem: 1,
    psm: 4,
  };

  extractText(imageBuffer) {
    return tesseract
      .recognize(imageBuffer, this.config)
      .then((text) => {
        return text.split('\n');
      })
      .catch((error) => {
        console.error(error);
        throw new Error(error.message);
      });
  }
}
