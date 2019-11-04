import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { getConfiguration } from "./config.env";
import { TypeOrmModule } from "@nestjs/typeorm";

const { db } = getConfiguration();

@Module({
    imports: [TypeOrmModule.forRoot(db)],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
