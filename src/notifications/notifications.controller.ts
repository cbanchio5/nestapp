import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateNotificationDto } from './dtos/create-notification.dto';
import { NotificationsService } from './notifications.service';
import { ConfigService } from '@nestjs/config';

@Controller('notification')
export class NotificationsController {

    constructor(private notificationService: NotificationsService, private configService: ConfigService) {
        this.notificationService = notificationService;
    }

    @Get()
    testString(){
        return "hi there";
    }

    @Post("/create")
    createNotification(@Body() body:CreateNotificationDto) {

        //this.notificationService.create(body.topic, body.description)
        const strategy = this.notificationService.getStrategy(body.topic, body.description);
        

    }

}