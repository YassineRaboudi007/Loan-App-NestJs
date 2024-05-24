import { ClientOptions, Transport } from "@nestjs/microservices";
import { join } from "path";

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: "ocr",
    protoPath: join(__dirname, "grpc/ocr.proto"),
    url: "localhost:3000", // Ensure this matches the server address and port
  },
};
