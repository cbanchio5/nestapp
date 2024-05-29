import sgMail from '@sendgrid/mail'
import { NotificationStrategy } from "../interfaces/notification-strategy.interface"; 
import { ConfigService } from '@nestjs/config'; 

export class SlackNotification implements NotificationStrategy {
  send(description: string): void {
    // Implement Slack notification logic here
    console.log(`Sending Slack notification: ${description}`);
  }
}