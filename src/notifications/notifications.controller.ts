import { Controller, Post, Body } from '@nestjs/common';
import { CreateNotificationDto } from './dtos/create-notification.dto';
import { NotificationsService } from './notifications.service';
import { ConfigService } from '@nestjs/config';

@Controller('notifications')
export class NotificationsController {

    constructor(private notificationService: NotificationsService, private configService: ConfigService) {
        this.notificationService = notificationService;
    }

    @Post()
    createNotification(@Body() body:CreateNotificationDto) {

        this.notificationService.create(body.topic, body.description)
        const strategy = this.notificationService.getStrategy(body.topic);
        strategy.send(body.description)

    }

}
