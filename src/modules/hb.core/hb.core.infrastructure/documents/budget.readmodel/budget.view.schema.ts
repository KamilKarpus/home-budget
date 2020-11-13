import * as mongoose from 'mongoose';

export const BudgetShortViewSchema = new mongoose.Schema({
        _id:  String,
        TotalExpenditure : Number ,
        TotalIncome : Number,
        Currency: String,
        Name: String,
        Total: Number,
        UserId : String
    }, {versionKey: false});