import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotificationsModule } from './notifications/notifications.module';
import { Notification } from './notifications/notification.entity';
import {config} from 'src/config/config'
import { ConfigModule } from '@nestjs/config';
import { EmailModule } from './email/email.module';
import { SlackModule } from './slack/slack.module';



@Module({
  imports: [NotificationsModule, TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'db.sqlite',
    entities: [Notification],
    synchronize: true
  }), ConfigModule.forRoot({
    isGlobal: true,
    load: [config]

  }), EmailModule, SlackModule],
  controllers: [AppController, ],
  providers: [AppService, ],
})
export class AppModule {}
