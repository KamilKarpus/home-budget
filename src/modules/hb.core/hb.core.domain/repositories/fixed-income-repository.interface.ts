import { FixedIncome } from "../fixed-incomes/fixed.income";

export interface IFixedIncomeRepository{
    add(fixedIncome : FixedIncome) : Promise<void>;
    getById(id: string) : Promise<FixedIncome>;
    getByBudgetId(budgetId : string) : Promise<FixedIncome[]>;
    getByTypeId(number : number) : Promise<FixedIncome[]>;
    getByTypeIdAndDays(number : number, day : number) : Promise<FixedIncome[]>;
}