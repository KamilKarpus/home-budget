import { IPasswordService } from "../../hb.users.application/contracts/password.service.interface";

const saltRounds = 10;

export class PasswordService implements IPasswordService{
    
    hashPassword(password: string): string {
        const bcrypt = require('bcrypt');
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);
        return  hash;
    }
    
    verifyPassword(hashedPassword: string, password: string): boolean {
        const bcrypt = require('bcrypt');
        return bcrypt.compareSync(password, hashedPassword);
    }

}