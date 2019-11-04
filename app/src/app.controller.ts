import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";
import { SampleModel } from "@mjamsek/sample-lib";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get()
    getHello(): string {
        const x: SampleModel = new SampleModel();
        x.age = 11;
        x.name = "lal";
        console.log(x);
        return this.appService.getHello();
    }
}
