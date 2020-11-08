export interface IPasswordService{
    hashPassword(password: string) : string;
    verifyPassword(hashedPassword : string, password: string) : boolean;
}