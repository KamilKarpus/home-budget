import { Guid } from "guid-typescript";

export interface MoneyDto{
    value: number;
    currency: string;
}

export interface HistoryDto{
    _id : Guid;
    change: MoneyDto;
    type : number;
    reason: string;
    occuredOn :Date;
}

export interface BudgetDto{
    _id : Guid;
    history : HistoryDto[];
    totalIncome : MoneyDto;
    totalExpenditure : MoneyDto;
}