import { Guid } from "guid-typescript";
import { User } from "./user";
export interface IUserRepository{
    add(user : User) : Promise<User> ;
    loadById(id : Guid) : Promise<User>;
    getByEmail(email: string) : Promise<User>;
}