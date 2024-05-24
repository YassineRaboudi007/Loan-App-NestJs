import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { OcrService } from './app.service';

@Controller()
export class OcrController {
  constructor(private readonly ocrService: OcrService) {}

  @GrpcMethod('OCRService', 'ExtractText')
  async extractText({ image }: { image: Buffer }): Promise<{ text: string[] }> {
    const text = await this.ocrService.extractText(image);
    return { text };
  }
}
