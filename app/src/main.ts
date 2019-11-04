import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { getConfiguration, logEnvironment } from "./config.env";
import "reflect-metadata";

const { port } = getConfiguration();

async function bootstrap() {
    logEnvironment();
    const app = await NestFactory.create(AppModule);
    await app.listen(port);
}

bootstrap();
