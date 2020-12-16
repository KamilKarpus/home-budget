import { Guid } from "guid-typescript";
import { User } from "../../hb.users.domain/user";
import { IUserRepository } from "../../hb.users.domain/user.repository.interface";
import { Inject } from "@nestjs/common";
import { Model } from 'mongoose';
import { UserDocument, UserModel } from "../documents/user.document";

export class UserRepository implements IUserRepository{

    constructor(@Inject('USERS_MODEL') private userModel : Model<UserModel>){}

    async add(user: User) : Promise<User> {
        var userDocument : UserDocument = {
            id: user.getId().toString(),
            registerDate :user.getRegisterDate(),
            password : user.getPassword(),
            firstName : user.getFirstName(),
            lastName : user.getLastName(), 
            email: user.getEmail()
        };
        await this.userModel.insertMany(userDocument);
        return user;
    }
    async loadById(id: Guid) : Promise<User> {
        const user = await this.userModel.findOne({id : id.toString()});
        return new User(Guid.parse(user.id), user.email, user.password, 
            user.registerDate, user.firstName, user.lastName);
    }
    async getByEmail(email: string) : Promise<User> {
        const user = await this.userModel.findOne({email: email});
        return new User(Guid.parse(user.id), user.email, user.password, 
        user.registerDate, user.firstName, user.lastName);
    }

}