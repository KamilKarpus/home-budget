import { Money } from "../../money";

export interface IIncomeCalculator{

    calculateIncome(month : number, year : number, day : number) : Money;

}