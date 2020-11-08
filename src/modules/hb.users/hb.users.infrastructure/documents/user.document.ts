import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    _id: String,
    _email : String,
    _password : String,
    _registerDate : Date,
    _firstName : String,
    _lastName : String
}, {versionKey: false});