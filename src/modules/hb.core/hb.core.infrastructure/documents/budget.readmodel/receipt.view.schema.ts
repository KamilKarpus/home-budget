import * as mongoose from 'mongoose';
import { ReceiptViewModel } from 'src/modules/hb.core/hb.core.application/read.models/receipt.view.model';

export const ReceiptViewModelSchema = new mongoose.Schema({
    id : String,
    budgetId : String,
    transactionId : String,
    fileUrls : [String]
}, {versionKey: false,_id: false, id: true});

export type ReceiptViewModelDocument = ReceiptViewModel & mongoose.Document;