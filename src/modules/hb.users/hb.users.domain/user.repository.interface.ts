import { Guid } from "guid-typescript";
import { User } from "./user";
export interface IUserRepository{
    add(user : User) : User;
    loadById(id : Guid);
    getByEmail(email: string) : User;
}