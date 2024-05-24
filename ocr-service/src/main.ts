import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions } from '@nestjs/microservices';
import { grpcServerOptions } from './grpc-server.options';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    grpcServerOptions,
  );
  await app.listen(); // Use listenAsync for proper asynchronous start
}
bootstrap();
