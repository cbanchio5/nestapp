import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config'; 
import { EmailController } from './email.controller';
import { EmailService } from './email.service';
import { MailerModule } from '@nestjs-modules/mailer'



@Module({
  imports:[ConfigModule, MailerModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: (configService: ConfigService) => ({
      transport: {
        host: configService.get<string>('sendgridHost'),
        auth: {
          user: configService.get<string>('sendgridUser'),
          pass: configService.get<string>('sendgridApi')
        }
      }
    }),
    inject: [ConfigService],
    
  })],
  controllers: [EmailController],
  providers: [EmailService],
  exports: [EmailService]
})
export class EmailModule {}
