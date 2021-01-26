export interface IIncomeService{
    consumeById(incomeTypeId : number, month : number, year : number, day: number) : Promise<void>
    dailyIncome() : Promise<void>;
    firstDayOfMonthIncome();
    fixedIncome();
    lastDayOfMonthIncome();

}