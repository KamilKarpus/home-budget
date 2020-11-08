
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { IBudgetRepository } from "src/modules/hb.core/hb.core.domain/repositories/budget.repository.interface";
import { Inject } from "@nestjs/common";
import { AddExpenditureCommand } from "./add.expenditure.command";

const BudgetRepository = () => Inject('BudgetRepository');

@CommandHandler(AddExpenditureCommand)
export class AddExpenditureCommandHandler implements ICommandHandler<AddExpenditureCommand> {
  constructor(@BudgetRepository() private repository: IBudgetRepository) {}

    async execute(command: AddExpenditureCommand): Promise<any> {
       const budget = await this.repository.findById(command.Id);
       budget.addExpenditure(command.Expenditure, command.Currency,
            command.Reason);
        await this.repository.update(budget);
    }

}