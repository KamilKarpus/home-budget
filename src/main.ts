import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger/dist/document-builder';
import { SwaggerModule } from '@nestjs/swagger/dist/swagger-module';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './bulding.blocks/infrastructure/exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new HttpExceptionFilter());

  const options = new DocumentBuilder()
    .setTitle('Home Budget')
    .setDescription('The Home Budget API description')
    .setVersion('1.0')
    .addTag('Home Budget')
    .addBearerAuth()
    .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('swagger', app, document);
    app.enableCors();
    await app.listen(3000);
}
bootstrap();
