import { AddIncomeCommand } from "./add.income.command";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { IBudgetRepository } from "src/modules/hb.core/hb.core.domain/repositories/budget.repository.interface";
import { Inject } from "@nestjs/common";

const BudgetRepository = () => Inject('BudgetRepository');

@CommandHandler(AddIncomeCommand)
export class AddIncomeCommandHandler implements ICommandHandler<AddIncomeCommand> {
  constructor(@BudgetRepository() private repository: IBudgetRepository) {}

    async execute(command: AddIncomeCommand): Promise<any> {
       const budget = await this.repository.findById(command.Id);
       budget.addIncome(command.Income,
            command.Reason);
        await this.repository.update(budget);
    }

}