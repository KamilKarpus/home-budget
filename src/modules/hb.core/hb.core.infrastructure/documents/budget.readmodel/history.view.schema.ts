import * as mongoose from 'mongoose';

export const MoneyView = new mongoose.Schema({
    Value: Number,
    Currency: String
}, {_id: false, versionKey : false});

export const HistoryBudgetSchema = new mongoose.Schema({
    _id : String,
    Change: MoneyView,
    Type : Number,
    Reason: String,
    OccuredOn :Date,
    BudgetId : String,
}, {versionKey: false});


export const HistoryViewSchema = new mongoose.Schema({
    _id:  String,
    History : [HistoryBudgetSchema] ,
}, {versionKey: false});