import { Money } from "../../money";
import { IIncomeCalculator } from "./income-calulator-interface";

export class SalariesCalculator implements IIncomeCalculator{

    private _monthlyIncome : number;
    private _currency : string;

    constructor(monthlyIncome : number, currency: string){
        this._monthlyIncome = monthlyIncome;
        this._currency = currency;

    }

    calculateIncome(month: number, year: number): Money {
        return new Money(this._monthlyIncome, this._currency);
    }

}