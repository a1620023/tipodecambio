import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix("api/v1");
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    })
  );
  const config = new DocumentBuilder()
    .setTitle('Tipo de Cambio API REST - Documentación')
    .setDescription('Servicio API REST de cambio de moneda, permite calcular y hacer operaciones de cambio de moneda, asi como registrar divisas y usuarios')
    .setVersion('1.0')
    .addTag('tipodecambio')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();
