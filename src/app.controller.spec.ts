import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TopicTypes } from './notifications/topic-types';
import { EmailService } from './notifications/email/email.service';
import { SlackService } from './notifications/slack/slack.service';
import { NotificationsService } from './notifications/notifications.service';

describe('AppController', () => {
  let appController: AppController;
  let bodyMock = {
    topic:TopicTypes.Pricing,
    description: "Tst"

  }

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, {
        provide: NotificationsService,
        useValue: {
          getStrategy: jest.fn(x => x)
        },
      },  ],
      
    }).compile();

    appController = app.get<AppController>(AppController);
  });

 it("should be defined", ()=> {
  expect(appController).toBeDefined()
 })
});
