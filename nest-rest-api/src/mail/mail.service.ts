import { Injectable } from '@nestjs/common';
import { SendgridService } from 'src/sendgrid/sendgrid.service';

@Injectable()
export class MailService {
  async sendEmail(email: string, subject: string, template: string) {
    const mail = {
      to: email,
      subject: subject,
      from: 'stavri.thomollari@softup.co',
      text: 'Hello',
      html: template,
    };
    return await SendgridService.prototype.send(mail);
  }
}
