import * as mongoose from 'mongoose';

export const GrantSchema = new mongoose.Schema({
    Key: String,
    SubjectId : String,
    CreateTime : Date,
    Experation : Date,
    ConsumedTime : Date
}, {versionKey: false});