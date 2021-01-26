import { Guid } from "guid-typescript";
import { Entity } from "src/bulding.blocks/domain";
import { Budget } from "../budget";
import { FixedTypesDays } from "../fixed.day.types";
import { Money } from "../money";
import { IncomeType } from "./icome.type";
import { IncomeCalculatorFactory } from "./income-calculators/income-calculator-factory";

export class FixedIncome extends Entity{
    private _id: string;
    private _type: FixedTypesDays;
    private _budgetId : string;
    private _incomeType : IncomeType;
    private _money : Money;
    private _description : string;
    private _dayOfIncome : number;


    public getBudgetId() : string{
        return this._budgetId;
    }

    constructor(id: string, type: FixedTypesDays, budgetId: string, incomeType : IncomeType, money : Money,
        description: string, dayOfIcome : number){
        super();
        this._id = id;
        this._type = type;
        this._budgetId = budgetId;
        this._incomeType = incomeType;
        this._money = money;
        this._description = description;
        this._dayOfIncome = dayOfIcome;
    }    

    public static create(typeId : number, incomeTypeId : number, budgetId : string, curreny : string, value : number, description : string,
        dayOfIncome : number) : FixedIncome{
        var type = FixedTypesDays.from(typeId);
        var incomeType = IncomeType.from(incomeTypeId);
        var id = Guid.create().toString();
        var money = new Money(value, curreny);
        return new this(id, type, budgetId, incomeType, money, description, dayOfIncome);
    }

    public consume(budget : Budget, month : number, year : number) : void{
        var incomeCalculator = new IncomeCalculatorFactory(this._money.getCurrency(),this._money.getValue()).factory(this._incomeType);

        var income = incomeCalculator.calculateIncome(month, year, this._dayOfIncome);

        budget.addIncome(income.getValue(), this._description);
    }

}