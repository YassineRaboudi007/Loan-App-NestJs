// src/grpc-server.options.ts
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { join } from 'path';

export const grpcServerOptions: MicroserviceOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'ocr',
    protoPath: join(__dirname, 'grpc/ocr.proto'), // Ensure the path is correct
  },
};
