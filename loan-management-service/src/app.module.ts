import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { KafkaService } from "./kafka.service";
import { LoanService } from "./loan.service";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { join } from "path";

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "OCR_PACKAGE",
        transport: Transport.GRPC,
        options: {
          package: "ocr",
          protoPath: join(__dirname, "grpc/ocr.proto"),
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [KafkaService, LoanService],
})
export class AppModule {}
