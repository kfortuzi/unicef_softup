import { Module } from '@nestjs/common';
import { WizardRepository } from './wizard.repository';
import { WizardService } from './wizard.service';
@Module({
  controllers: [],
  providers: [WizardService, WizardRepository],
  exports: [WizardService, WizardRepository],
})
export class WizardModule {}
