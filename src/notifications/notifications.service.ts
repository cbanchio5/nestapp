import { Injectable, BadRequestException, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Notification } from './notification.entity';
import { NotificationStrategy } from './interfaces/notification-strategy.interface';
import { TopicTypes } from './topic-types';
import { EmailService } from 'src/email/email.service';
import { SlackService } from 'src/slack/slack.service';
import { SlackNotification } from './strategies/slack-notification-strategy';
import { EmailNotification } from './strategies/email-notification-strategy';




@Injectable()
export class NotificationsService {
    
    private strategies: { [key: string]: NotificationStrategy } = {
        slack: new SlackNotification(),
        email: new EmailNotification(),
      } ;

     
      
   
    
    constructor(@InjectRepository(Notification) private repo: Repository<Notification>, 
    private readonly emailService: EmailService,
    private readonly slackService: SlackService,
    ) {
        this.repo = repo;
        
    }

    getStrategy(topic: TopicTypes, description:string): NotificationStrategy {
        if(topic == TopicTypes.Sales) {
            this.slackService.send(description)
             return this.strategies.slack
        }

        if(topic == TopicTypes.Pricing) {
            this.emailService.send(description)
            
            
            return this.strategies.email
        }

        throw new BadRequestException('Topic is not valid')

      }

    
/*
    create(topic: TopicTypes, description: string) {
        const notification = this.repo.create({topic, description})

        return this.repo.save(notification)

    }
    */
    

   
}
