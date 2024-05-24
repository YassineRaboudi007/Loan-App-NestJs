import { Injectable } from "@nestjs/common";
import { Kafka } from "kafkajs";

@Injectable()
export class KafkaService {
  private kafka: Kafka;
  private producer: any;

  constructor() {
    this.kafka = new Kafka({ brokers: ["kafka:9092"] });
    this.producer = this.kafka.producer();
  }

  async sendKafkaEvent(event: any) {
    await this.producer.connect();
    await this.producer.send({
      topic: "loanEvents",
      messages: [{ key: "loan", value: JSON.stringify(event) }],
    });
  }
}
