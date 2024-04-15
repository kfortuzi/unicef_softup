import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './commons/prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { CaslModule } from './casl/casl.module';
import { LoggerModule } from 'nestjs-pino';
import { LoggerMiddleware } from './logger/logger.middleware';
import { JobModule } from './job/job.module';
import { ChatbotModule } from './chatbot/chatbot.module';
import { OpenAIModule } from './openai/openai.module';
import { ResumeModule } from './resume/resume.module';
import { CoverLetterModule } from './coverletter/coverletter.module';
import { WizardModule } from './wizard/wizard.module';
import { AssetModule } from './asset/asset.module';
import { SesService } from './ses/ses.service';
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
