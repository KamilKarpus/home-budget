import * as mongoose from 'mongoose';
import { HistoryView } from 'src/modules/hb.core/hb.core.application/read.models/history.view';

export const MoneyView = new mongoose.Schema({
    value: Number,
    currency: String
}, {_id: false, versionKey : false});

export const HistoryBudgetSchema = new mongoose.Schema({
    id : String,
    change: MoneyView,
    type : Number,
    reason: String,
    occuredOn :Date,
    budgetId : String,
}, {_id: false, versionKey : false, id: true});


export const HistoryViewSchema = new mongoose.Schema({
    id:  String,
    history : [HistoryBudgetSchema] ,
}, {versionKey: false,_id: false, id: true});


export type HistoryDocument = HistoryView & mongoose.Document;