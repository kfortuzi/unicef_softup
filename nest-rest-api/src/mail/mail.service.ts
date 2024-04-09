import { Injectable } from '@nestjs/common';
import { SendgridService } from '../sendgrid/sendgrid.service';

@Injectable()
export class MailService {
  async sendEmail(email: string, subject: string, template: string) {
    const mail = {
      to: email,
      subject: subject,
      from: 'stivi.ndoni@softup.co',
      text: 'Hello',
      html: template,
    };
    return await SendgridService.prototype.send(mail);
  }
}
