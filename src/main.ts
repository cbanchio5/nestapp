import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config'; 



async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get('port');


  app.useGlobalPipes(new ValidationPipe({
    whitelist:true
  }))
  await app.listen(port);
  console.log(`listening on ${port}`)
}
bootstrap();
