import { Module } from '@nestjs/common';
import { OcrController } from './app.controller';
import { OcrService } from './app.service';

@Module({
  imports: [],
  controllers: [OcrController],
  providers: [OcrService],
})
export class AppModule {}
