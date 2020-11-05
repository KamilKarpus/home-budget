import * as mongoose from 'mongoose';

export const BudgetShortViewSchema = new mongoose.Schema({
        _id:  String,
        TotalExpenditure : Number ,
        TotalIncome : Number,
        Currency: Number,
        Name: String
    }, {versionKey: false});