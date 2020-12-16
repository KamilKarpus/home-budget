import { Inject } from "@nestjs/common";
import { IUserEmailUniqueness } from "../../hb.users.domain/user.email.uniqueness.inferface";
import { Model } from 'mongoose';
import { UserModel } from "../documents/user.document";

export class UserEmailUniqueness implements IUserEmailUniqueness{

    constructor(@Inject('USERS_MODEL') private userModel : Model<UserModel>){}

     async isEmailUnique(email: string): Promise<boolean> {
            const result = await this.userModel.findOne({email: email});
            return !result;
    }

}