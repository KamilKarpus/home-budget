import { Guid } from 'guid-typescript';
import { Document } from 'mongoose';

export interface MoneyDocument extends Document{
    readonly value: number;
    readonly currency: string;
}

export interface BalanceEventDocument extends Document{
    readonly moneyChange : MoneyDocument;
    readonly comment : string;
    readonly type : string;
}

export interface BudgetDocument extends Document{
    readonly _id : Guid;
    readonly _balance : BalanceEventDocument[];
    readonly _totalIncome : MoneyDocument;
    readonly _totalExpenditure : MoneyDocument;
}
