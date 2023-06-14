import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    const PORT = Number(process.env.PORT) || 5000;
    const app = await NestFactory.create(AppModule, { cors: true });

    await app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (error) {
    console.log('error:', error);
  }
}
bootstrap();
