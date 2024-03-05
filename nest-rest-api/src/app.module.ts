import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './commons/prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { SendgridService } from './sendgrid/sendgrid.service';
import { MailController } from './mail/mail.controller';
import { MailService } from './mail/mail.service';
import { CaslModule } from './casl/casl.module';
import { LoggerModule } from 'nestjs-pino';
import { LoggerMiddleware } from './logger/logger.middleware';
import { JobsModule } from './job/job.module';
import { ChatbotModule } from './chatbot/chatbot.module';
import { OpenAIModule } from './openai/openai.module';
import { ResumeModule } from './resume/resume.module';

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
              level: process.env.NODE_ENV !== 'production' ? 'trace' : 'info',
              target: 'pino-pretty',
              options: { singleLine: true },
            },
          ],
        },
      },
    }),
    JobsModule,
    ChatbotModule,
    OpenAIModule,
    ResumeModule,
  ],
  controllers: [AppController, MailController],
  providers: [AppService, SendgridService, MailService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
