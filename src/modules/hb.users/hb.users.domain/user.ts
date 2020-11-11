import { Guid } from "guid-typescript";
import { Entity } from "src/bulding.blocks/domain";

export class User extends Entity{
    private _id: Guid;
    private _email : string;
    private _password : string;
    private _registerDate : Date;
    private _firstName : string;
    private _lastName : string;

    constructor(id: Guid, email: string, password: string, registerDate: Date,
        firstName: string, lastName : string){
            super();
            this._id = id;
            this._email = email;
            this._firstName = firstName;
            this._lastName = lastName;
            this._password = password;
            this._registerDate = registerDate;
        }

    public static register(email: string, password: string, firstName : string, lastName: string) : User{
        const user = new User(Guid.create(), email, password, new Date(), firstName, lastName);
        return user;
    }

    public getId() : Guid{
        return this._id;
    }

    public getEmail() : string{
        return this._email;
    }

    public getFirstName() : string{
        return this._firstName;
    }
    public getLastName() : string{
        return this._lastName;
    }
    public getPassword() : string{
        return this._password;
    }

    public getRegisterDate() : Date{
        return this._registerDate;
    }
}