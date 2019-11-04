import { Module } from "@nestjs/common";
import { EntitiesModule } from "../entities";

@Module({
    imports: [EntitiesModule],
    providers: [],
    exports: [],
})
export class ServicesModule {
}
