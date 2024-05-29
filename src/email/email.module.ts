import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'; 
import { EmailController } from './email.controller';
import { EmailService } from './email.service';
import { MailerModule } from '@nestjs-modules/mailer'


@Module({
  imports:[ConfigModule, MailerModule.forRoot({
    transport: {
      host: 'smtp.sendgrid.net',
      auth: {
        user: 'apikey',
        pass: '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'
      }
    }
  })],
  controllers: [EmailController],
  providers: [EmailService],
  exports: [EmailService]
})
export class EmailModule {}
