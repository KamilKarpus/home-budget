import { Rates } from "./currency.dto";

export interface RatesDTO {
    rates: Rates;
    base: string;
    date: string;
}