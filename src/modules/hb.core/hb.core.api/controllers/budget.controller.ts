import { Body, Controller, Param, Post, Put } from "@nestjs/common";
import { CommandBus } from "@nestjs/cqrs";
import { Guid } from "guid-typescript";
import { AddExpenditureCommand } from "../../hb.core.application/commands/add.expenditure.command/add.expenditure.command";
import { AddIncomeCommand } from "../../hb.core.application/commands/add.income.command/add.income.command";
import { CreateBudgetCommand } from "../../hb.core.application/commands/create.budget.command/create.budget.command";
import { AddBudgetDto } from "../dtos/budget.add.dtos";
import { ExpenditureDto } from "../dtos/budget.expenditure.dto";
import { AddIncomeDto } from "../dtos/budget.income.dtos";
import { Created } from "../responses/created";



@Controller('budgets')
export class BudgetController{
    constructor(private commandBus: CommandBus){

    }

    @Post()
    async create(@Body() addBudgetDto : AddBudgetDto){
        const id = await this.commandBus.execute(new CreateBudgetCommand(addBudgetDto.name));
        return new Created(id.value); 
    }

    @Put(":id/income")
    async updateIncome(@Param('id') id: string, @Body() incomeAdded : AddIncomeDto){
        await this.commandBus.execute(new AddIncomeCommand(Guid.parse(id), incomeAdded.Income, incomeAdded.Currency, 
            incomeAdded.Reason));
    }

    @Put(":id/expenditure")
    async updateExpenditure(@Param('id') id: string, @Body() expenditure : ExpenditureDto){
        await this.commandBus.execute(new AddExpenditureCommand(Guid.parse(id),
            expenditure.Expenditure, expenditure.Currency, expenditure.Reason));
    }

}