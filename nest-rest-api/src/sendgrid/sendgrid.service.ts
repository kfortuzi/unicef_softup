import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import SendGrid from '@sendgrid/mail';

@Injectable()
export class SendgridService {
  constructor(private readonly configService: ConfigService) {
    const key = this.configService.get<string>('SEND_GRID_KEY') as string;
    SendGrid.setApiKey(key);
  }

  async send(mail: SendGrid.MailDataRequired) {
    const transport = await SendGrid.send(mail);
    // avoid this on production. use log instead :)
    console.log(`E-Mail sent to ${mail.to}`);
    return transport;
  }
}
