import { Injectable } from '@nestjs/common';
import { SESv2, SendEmailCommand } from '@aws-sdk/client-sesv2';

import { Config } from 'config';

@Injectable()
export class SesService {
  private ses;

  constructor(private config: Config) {
    this.ses = new SESv2({
      region: this.config.awsRegion,
      endpoint: 'https://email.eu-central-1.amazonaws.com',
    });
  }

  public async sendEmail(
    subject: string,
    body: string,
    to: string,
  ): Promise<void> {
    return this.ses
      .send(
        new SendEmailCommand({
          FromEmailAddress: this.config.sesFromEmail,
          Destination: { ToAddresses: [to] },
          Content: {
            Simple: {
              Subject: { Data: subject },
              Body: { Html: { Data: body } },
            },
          },
        }),
      )
      .then(() => {});
  }
}
