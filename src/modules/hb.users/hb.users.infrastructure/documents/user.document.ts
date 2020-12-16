import * as mongoose from 'mongoose';
import { User } from '../../hb.users.domain/user';

export const UserSchema = new mongoose.Schema({
    id: String,
    email : String,
    password : String,
    registerDate : Date,
    firstName : String,
    lastName : String
}, {versionKey: false});


export interface UserDocument{
    id: string;
    email : string;
    password : string;
    registerDate : Date;
    firstName : string;
    lastName : string;
}

export type UserModel = UserDocument & mongoose.Document;