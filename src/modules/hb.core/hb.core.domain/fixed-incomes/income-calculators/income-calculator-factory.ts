import { Entity } from "src/bulding.blocks/domain";
import { IncomeType } from "../icome.type";
import { IIncomeCalculator } from "./income-calulator-interface";
import { SalariesCalculator } from "./salaries.calculator";
import { WagesCalculator } from "./wages-calculator";

export class IncomeCalculatorFactory{

    private _currency : string;
    private _money : number;


    constructor(currency : string, money : number){
        this._currency = currency;
        this._money = money;

    }


    public factory(type : IncomeType) : IIncomeCalculator{
        switch(type.getId())
        {
            case IncomeType.salaryId:
                return new SalariesCalculator(this._money, this._currency);
            case IncomeType.wagesId:
                return new WagesCalculator(this._money, this._currency);
        }
    }

}