import * as mongoose from 'mongoose';

export const MoneySchema = new mongoose.Schema({
    value : Number,
    currency: String,
}, {_id: false});

export const HistorySchema = new mongoose.Schema({
    _id : String,
    change: MoneySchema,
    type : Number,
    reason: String,
    occuredOn :Date

});

export const BudgetSchema = new mongoose.Schema({
    _id:  String,
    totalExpenditure : MoneySchema,
    totalIncome : MoneySchema,
    history: [HistorySchema],
})
