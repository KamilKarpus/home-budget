import { Inject } from "@nestjs/common";
import { User } from "../../hb.users.domain/user";
import { IUserEmailUniqueness } from "../../hb.users.domain/user.email.uniqueness.inferface";
import { Model } from 'mongoose';

export class UserEmailUniqueness implements IUserEmailUniqueness{

    constructor(@Inject('USERS_MODEL') private userModel : Model<User>){}

     async isEmailUnique(email: string): Promise<boolean> {
            const result = await this.userModel.findOne({_email: email});
            return !result;
    }

}