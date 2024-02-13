import { Controller } from '@nestjs/common';
import { SendgridService } from '../sendgrid/sendgrid.service';

@Controller('mail')
export class MailController {
  constructor(private readonly sendgridService: SendgridService) {}
}
