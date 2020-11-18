import { Controller, Get, UseGuards } from "@nestjs/common";
import { QueryBus } from "@nestjs/cqrs";
import { ApiBearerAuth } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/common/authGuard/auth.guard";
import { GetCurrenciesQuery } from "../../hb.core.application/queries/getCurrencies/get.currencies.query";

@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('currencies')
export class CurrenciesQueryController{
    constructor(
        private readonly queryBus: QueryBus,
      ) {}


    @Get()
    async getCurrencies(){
        const result = await this.queryBus.execute(new GetCurrenciesQuery());
        return result;
    }
}