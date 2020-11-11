import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { BusinessRuleAsync } from "../domain/business.rule.async.base";

export abstract class CommandHandlerBase<T> implements ICommandHandler<T>{

    abstract execute(command: T): Promise<any>;

    async checkRuleAsync(rule : BusinessRuleAsync){
        const result = await rule.isBroken();
        if(result){
            rule.throw();
        }
    }    
}