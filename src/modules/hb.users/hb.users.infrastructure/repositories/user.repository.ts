import { Guid } from "guid-typescript";
import { User } from "../../hb.users.domain/user";
import { IUserRepository } from "../../hb.users.domain/user.repository.interface";
import { Inject } from "@nestjs/common";
import { Model } from 'mongoose';

export class UserRepository implements IUserRepository{

    constructor(@Inject('USERS_MODEL') private userModel : Model<User>){}

    add(user: User) : User {
        const newUser = new this.userModel(user);
        return newUser.save();
    }
    async loadById(id: Guid) : Promise<User> {
        const user = this.userModel.findById(id.toString()).lean();
        return new User(user?._id, user?._email, user?._password, user?._registerDate,
            user?._firstName, user?._lastName);
    }
    async getByEmail(email: string) : Promise<User> {
        const user = await this.userModel.findOne({_email: email});
        return new User(user?._id, user?._email, user?._password, user?._registerDate,
            user?._firstName, user?._lastName);
    }

}