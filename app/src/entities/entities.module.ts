import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([
        // entities:
    ])],
    exports: [TypeOrmModule],
})
export class EntitiesModule {
}
