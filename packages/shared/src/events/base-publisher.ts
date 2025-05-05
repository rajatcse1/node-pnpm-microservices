import { Stan } from 'node-nats-streaming';
import { BaseEvent } from './base-event';

export abstract class BasePublisher<T extends BaseEvent> {
  abstract subject: T['subject'];
  protected client: Stan;

  constructor(client: Stan) {
    this.client = client;
  }

  publish(data: T['data']): Promise<void> {
    return new Promise((resolve, reject) => {
      const jsonData = JSON.stringify(data);

      this.client.publish(this.subject, jsonData, err => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  }
}
