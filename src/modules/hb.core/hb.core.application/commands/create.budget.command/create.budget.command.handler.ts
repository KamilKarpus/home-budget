import { Inject } from "@nestjs/common";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { Guid } from "guid-typescript";
import { Budget } from "src/modules/hb.core/hb.core.domain";
import { IBudgetRepository } from "src/modules/hb.core/hb.core.domain/repositories/budget.repository.interface";
import { CreateBudgetCommand } from "./create.budget.command";

const BudgetRepository = () => Inject('BudgetRepository');

@CommandHandler(CreateBudgetCommand)
export class CreateBudgetCommandHandler implements ICommandHandler<CreateBudgetCommand> {
  constructor(@BudgetRepository() private repository: IBudgetRepository) {}

    async execute(command: CreateBudgetCommand): Promise<any> {
        const budget = Budget.create(Guid.create(), command.Name, Guid.parse(command.OwnerId),
        command.Currency);
        await this.repository.create(budget);

        return budget.getAggregateId();
    }

}