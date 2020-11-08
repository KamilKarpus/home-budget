import { UserEmailUniqueness } from "../domain/user.email.uniqueness";
import { UserRepository } from "../repositories/user.repository";

export const RepositoryProviders = [
    {
      provide: 'UserRepository',
      useClass: UserRepository,
    },
    {
        provide: 'UserEmailUniqueness',
        useClass : UserEmailUniqueness
    }
  ];