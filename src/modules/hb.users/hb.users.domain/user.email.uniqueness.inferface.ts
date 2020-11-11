export interface IUserEmailUniqueness{
    isEmailUnique(email: string) : Promise<boolean>;
}