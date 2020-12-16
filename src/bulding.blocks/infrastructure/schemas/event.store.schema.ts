import * as mongoose from 'mongoose';

export const EventStoreSchema = new mongoose.Schema({
    id : String,
    data : String,
    version : Number,
    createdAt : Date,
    name : String,
    aggregateId: String
}, {versionKey: false, id: true});