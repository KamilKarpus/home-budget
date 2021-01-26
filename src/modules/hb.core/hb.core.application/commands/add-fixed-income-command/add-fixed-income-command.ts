import { Inject } from "@nestjs/common";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { Guid } from "guid-typescript";
import { CommandHandlerBase } from "src/bulding.blocks/application/command.base";
import { FixedIncome } from "src/modules/hb.core/hb.core.domain/fixed-incomes/fixed.income";
import { IFixedIncomeRepository } from "src/modules/hb.core/hb.core.domain/repositories/fixed-income-repository.interface";
import { IBudgetShortViewService } from "../../contracts/budget.short.view.interface";
import { AddFixedIncomeCommand } from "./add-fixed-income-command-handler";

const FixedIncomeRepository = () => Inject('FixedIncomeRepository');
const ShortViewService = () => Inject('BudgetShortViewService');  

@CommandHandler(AddFixedIncomeCommand)
export class AddFixedIncomeCommandHandler extends CommandHandlerBase<AddFixedIncomeCommand> {

    constructor(@FixedIncomeRepository() private readonly repository : IFixedIncomeRepository,
    @ShortViewService() private readonly service: IBudgetShortViewService){
        super();
    }

    async execute(command: AddFixedIncomeCommand): Promise<any> {
        var budgetView = await this.service.loadById(Guid.parse(command.budgetId));

        var fixedIncome = FixedIncome.create(command.type, command.incomeType, 
            budgetView.id,budgetView.currency, command.money, command.description, command.dayOfIncome);
        console.log(fixedIncome);
        await this.repository.add(fixedIncome);
        
        return fixedIncome["_id"];
    }

}