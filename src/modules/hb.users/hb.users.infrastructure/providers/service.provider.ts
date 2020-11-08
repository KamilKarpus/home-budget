import { PasswordService } from "../services/password.service";
export const ServicesProviders = [
    {
        provide: 'PasswordService',
        useClass: PasswordService
    }
];