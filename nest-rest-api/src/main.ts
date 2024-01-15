import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { Logger as PinoLogger, LoggerErrorInterceptor } from 'nestjs-pino';
import * as cookieParser from 'cookie-parser';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  const configService = new ConfigService();
  app.enableCors();
  app.useLogger(app.get(PinoLogger));
  app.useGlobalInterceptors(new LoggerErrorInterceptor());

  const config = new DocumentBuilder()
    .setTitle('SoftupX')
    .setDescription('SoftupX API')
    .setVersion('1.0')
    .addBearerAuth()
    // .addOAuth2({
    //   type: 'oauth2',
    //   flows: {
    //     implicit: {
    //       scopes: {},
    //       authorizationUrl: `${configService.get<string>('HOST_URL') as string}/auth`,
    //     },
    //   },
    // })
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document, {
    swaggerOptions: {
      initOAuth: {
        clientId: process.env.GOOGLE_CLIENT_ID,
      },
    },
  });

  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(configService.get<number>('SERVER_PORT') as number);
}
bootstrap();
