export interface NotificationStrategy {
    send(description: string): void;
  }