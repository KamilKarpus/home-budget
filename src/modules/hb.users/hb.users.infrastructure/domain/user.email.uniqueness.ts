import { Inject } from "@nestjs/common";
import { User } from "../../hb.users.domain/user";
import { IUserEmailUniqueness } from "../../hb.users.domain/user.email.uniqueness.inferface";
import { Model } from 'mongoose';

export class UserEmailUniqueness implements IUserEmailUniqueness{

    constructor(@Inject('USERS_MODEL') private userModel : Model<User>){}

     isEmailUnique(email: string): boolean {
        const result = this.userModel.findOne({email: email}).exec();
        return !result;
    }

}