// src/loan.service.ts
import { Injectable, Inject, OnModuleInit } from "@nestjs/common";
import { ClientGrpc } from "@nestjs/microservices";
import { Observable, firstValueFrom } from "rxjs";
import { KafkaService } from "./kafka.service"; // Correct import path

interface OCRService {
  extractText(data: { image: Buffer }): Observable<{ text: string[] }>;
}

@Injectable()
export class LoanService implements OnModuleInit {
  private ocrService: OCRService;

  constructor(
    @Inject("OCR_PACKAGE") private readonly client: ClientGrpc,
    private kafkaService: KafkaService, // Inject KafkaService
  ) {}

  async onModuleInit() {
    this.ocrService = this.client.getService<OCRService>("OCRService");
  }

  async processFile(fileName: string, filePath: Buffer) {
    const response = await firstValueFrom(
      this.ocrService.extractText({ image: filePath }),
    );
    const textArray = response.text;
    const score = this.getScore(textArray);
    await this.kafkaService.sendKafkaEvent({
      fileName,
      score,
    });
  }

  getScore(textArray: string[]): number {
    // Here we will have our business logic to calculate the score
    return textArray.length;
  }
}
