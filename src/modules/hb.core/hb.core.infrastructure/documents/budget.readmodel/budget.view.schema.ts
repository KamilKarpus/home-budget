import * as mongoose from 'mongoose';
import { BudgetShortView } from 'src/modules/hb.core/hb.core.application/read.models/budget.short.view';

export const BudgetShortViewSchema = new mongoose.Schema({
    id : String,
    totalIncome : Number,
    totalExpenditure : Number,
    currency: String,
    name : String,
    total: Number,
    userId : String
    }, 
    {
        versionKey: false,
        id: false,
        _id : false
    });


export type BudgetShortViewDocument = BudgetShortView & mongoose.Document;