import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { Guid } from "guid-typescript";
import { Budget } from "src/modules/hb.core/hb.core.domain";
import { BudgetRepository } from "src/modules/hb.core/hb.core.infrastructure/repositories/budget.repository";
import { CreateBudgetCommand } from "./create.budget.command";

@CommandHandler(CreateBudgetCommand)
export class CreateBudgetCommandHandler implements ICommandHandler<CreateBudgetCommand> {
  constructor(private repository: BudgetRepository) {}

    async execute(command: CreateBudgetCommand): Promise<any> {
        const budget = new Budget(Guid.create(), command.Name);
        await this.repository.create(budget);

        return budget.getId();
    }

}