import { Guid } from "guid-typescript";

export class BudgetShortView{
    constructor(
    public _id : Guid,
    public TotalIncome : number,
    public TotalExpenditure : number,
    public Currency: string,
    public Name : string
    ) {}
}