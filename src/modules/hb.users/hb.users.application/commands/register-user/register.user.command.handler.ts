import { Inject } from "@nestjs/common";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CommandHandlerBase } from "src/bulding.blocks/application/command.base";
import { EmailMustBeUniqueBussinessRule } from "src/modules/hb.users/hb.users.domain/rules/email.must.be.unique.business.rule";
import { User } from "src/modules/hb.users/hb.users.domain/user";
import { IUserEmailUniqueness } from "src/modules/hb.users/hb.users.domain/user.email.uniqueness.inferface";
import { IUserRepository } from "src/modules/hb.users/hb.users.domain/user.repository.interface";
import { IPasswordService } from "../../contracts/password.service.interface";
import { RegisterUserCommand } from "./register.user.command";

const PasswordService = () => Inject('PasswordService');
const UserRepository = () => Inject('UserRepository');
const UserEmailUniqueness = () => Inject('UserEmailUniqueness');

@CommandHandler(RegisterUserCommand)
export class RegisterUserCommandHandlder extends CommandHandlerBase<RegisterUserCommand> {
  constructor(@PasswordService() private readonly service: IPasswordService,
              @UserRepository() private readonly repository : IUserRepository,
              @UserEmailUniqueness() private readonly emailUniqueness : IUserEmailUniqueness) {
                  super();
              }

    async execute(command: RegisterUserCommand): Promise<any> {
        await this.checkRuleAsync(new EmailMustBeUniqueBussinessRule(this.emailUniqueness, command.email));
        const hashedPassword = this.service.hashPassword(command.password);
        const user = User.register(command.email, hashedPassword, command.firstName, 
            command.lastName);
        await this.repository.add(user);
        return user.getId();
    }

}