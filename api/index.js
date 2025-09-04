const { createServer } = require('http');
const { NestFactory } = require('@nestjs/core');
const { AppModule } = require('../dist/app.module')

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.init();

    const server = createServer(app.getHttpAdapter().getInstance());
    server.listen(3000);
}

bootstrap();
