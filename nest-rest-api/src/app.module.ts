import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { PrismaModule } from './modules/commons/prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { CaslModule } from './modules/casl/casl.module';
import { LoggerModule } from 'nestjs-pino';
import { LoggerMiddleware } from './modules/logger/logger.middleware';
import { JobModule } from './modules/job/job.module';
import { ChatbotModule } from './modules/chatbot/chatbot.module';
import { OpenAIModule } from './modules/openai/openai.module';
import { ResumeModule } from './modules/resume/resume.module';
import { CoverLetterModule } from './modules/coverletter/coverletter.module';
import { WizardModule } from './modules/wizard/wizard.module';
import { AssetModule } from './modules/asset/asset.module';
import { SesService } from './modules/ses/ses.service';
import { Config } from 'config';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    UserModule,
    ConfigModule.forRoot(),
    CaslModule,
    LoggerModule.forRoot({
      pinoHttp: {
        transport: {
          targets: [
            {
              level: process.env.NODE_ENV !== 'prod' ? 'trace' : 'info',
              target: 'pino-pretty',
              options: { singleLine: true },
            },
          ],
        },
      },
    }),
    JobModule,
    ChatbotModule,
    OpenAIModule,
    ResumeModule,
    CoverLetterModule,
    WizardModule,
    AssetModule,
  ],
  controllers: [AppController],
  providers: [AppService, SesService, Config],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
