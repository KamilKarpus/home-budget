import * as mongoose from 'mongoose';

export const FixedIncomeSchema = new mongoose.Schema({
    id : String,
    type : Number,
    budgetId : String,
    description: String,
    money : Number,
    incomeType: Number,
    currency : String,
    dayOfIncome : Number
    }, 
    {
        versionKey: false,
        id: false,
        _id : false
    });


export class FixedIncomeSolidDocument{
    public id : string;
    public type : number;
    public budgetId : string;
    public description: string;
    public money : number;
    public incomeType: number;
    public currency: string;
    public dayOfIncome : number;
}

export type FixedIncomeDocument = FixedIncomeSolidDocument & mongoose.Document; 