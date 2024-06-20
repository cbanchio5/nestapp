import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { NotificationsController } from './notifications.controller';
import { NotificationsService } from './notifications.service';
import { Notification } from './notification.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { EmailModule } from 'src/notifications/email/email.module';
import { SlackModule } from 'src/notifications/slack/slack.module';

@Module({
  imports: [SlackModule, EmailModule, TypeOrmModule.forFeature([Notification]), BullModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService) => ({
    }),
    inject: [ConfigService],
  })],
  //controllers: [NotificationsController],
  providers: [NotificationsService],
  exports: [NotificationsService]
  
})
export class NotificationsModule {}
