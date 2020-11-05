import * as mongoose from 'mongoose';

export const MoneySchema = new mongoose.Schema({
    _value : Number,
    _currency: String,
}, {_id: false});

export const HistorySchema = new mongoose.Schema({
    _id : String,
    _change: MoneySchema,
    _type : Number,
    _reason: String,
    _occuredOn :Date

});

export const BudgetSchema = new mongoose.Schema({
    _id:  String,
    _totalExpenditure : MoneySchema,
    _totalIncome : MoneySchema,
    _history: [HistorySchema],
    _name: String
})
