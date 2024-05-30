import { Injectable } from '@nestjs/common';
import { NotificationStrategy } from 'src/notifications/interfaces/notification-strategy.interface';

@Injectable()
export class SlackService implements NotificationStrategy{

    send(description:string) {
        console.log("Slack notification from service")
    }
}
