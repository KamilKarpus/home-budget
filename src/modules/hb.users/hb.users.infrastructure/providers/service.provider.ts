import { AuthService } from "../services/auth.service";
import { PasswordService } from "../services/password.service";
export const ServicesProviders = [
    {
        provide: 'PasswordService',
        useClass: PasswordService
    },
    {
        provide: 'AuthService',
        useClass: AuthService
    }
];