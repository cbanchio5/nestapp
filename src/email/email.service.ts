import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MailerService } from '@nestjs-modules/mailer';


@Injectable()
export class EmailService {
    constructor(private configService: ConfigService, private readonly mailerService: MailerService) {}

    send() {
        const api = this.configService.get<string>('sendgridApiKey');
        console.log("sending from email service")
    }

    async sendMail() {
        await this.mailerService.sendMail({
            to:'cesar.b@landbot.io',
            from: 'cbanchio5@gmail.com',
            subject: "testing",
            text: 'welcome',
            html: '<b>Welcome</b>'
        })

        console.log("Email sent")
        return "done"
        
    }

   
}
