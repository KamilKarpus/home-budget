import * as mongoose from 'mongoose';

export const MoneySchema = new mongoose.Schema({
    value : Number,
    currency: String,
}, {_id: false});

export const HistorySchema = new mongoose.Schema({
    _id : String,
    _change: MoneySchema,
    _type : Number,
    _reason: String,
    _occuredOn :Date

});

export const BudgetCreatedEventSchema = new mongoose.Schema({
     id: String,
     balanceName : String,
     userId : String,
     currency : String,
     budgetId : String,
     occuredDate: Date,
     type: String
})
