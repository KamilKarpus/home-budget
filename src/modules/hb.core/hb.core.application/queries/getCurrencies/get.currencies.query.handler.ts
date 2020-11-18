import { Inject } from "@nestjs/common";
import { QueryHandler, IQueryHandler } from "@nestjs/cqrs";
import { Rates } from "src/bulding.blocks/application/dtos/currency.dto";
import { RatesDTO } from "src/bulding.blocks/application/dtos/rates.dto";
import { IExternalClient } from "src/bulding.blocks/application/external.client.interface";
import { Environment } from "src/environment";
import { CurrenciesDto } from "../../read.models/currencies.dto";
import { GetCurrenciesQuery } from "./get.currencies.query";

const ExternalClient = () => Inject("ExternalClient");

@QueryHandler(GetCurrenciesQuery)
export class GetCurrenciesQueryHandler implements IQueryHandler<GetCurrenciesQuery> {
    
    constructor(@ExternalClient() private readonly externalClient : IExternalClient){

    }
    
    async execute(query: GetCurrenciesQuery): Promise<CurrenciesDto[]> {
        const result = await this.externalClient.getAsync<RatesDTO>(Environment.currencyApi, "");
        
        const currencies = [];
        for (const [key, value] of Object.entries(result.rates)) {
            currencies.push({name: key});
        }
        currencies.push({name: result.base});

        return currencies;
    }

}