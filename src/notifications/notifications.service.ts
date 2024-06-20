import { Injectable, BadRequestException, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Notification } from './notification.entity';
import { NotificationStrategy } from './interfaces/notification-strategy.interface';
import { TopicTypes } from './topic-types';
import { EmailService } from './email/email.service';
import { SlackService } from './slack/slack.service';

@Injectable()
export class NotificationsService {
    
    
    constructor(@InjectRepository(Notification) private repo: Repository<Notification>, 
    private readonly emailService: EmailService,
    private readonly slackService: SlackService,
    ) {
        this.repo = repo;
        
    }

    getStrategy(topic: TopicTypes, description:string) {
        if(topic == TopicTypes.Sales) {
            return this.slackService.send(description)
             
        }

        if(topic == TopicTypes.Pricing) {
           return this.emailService.send(description)
        
          
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