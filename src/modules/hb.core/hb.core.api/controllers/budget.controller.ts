import { Body, Controller, Param, Post, Put } from "@nestjs/common";
import { CommandBus } from "@nestjs/cqrs";
import { Guid } from "guid-typescript";
import { AddIncomeCommand } from "../../hb.core.application/commands/add.income.command/add.income.command";
import { CreateBudgetCommand } from "../../hb.core.application/commands/create.budget.command/create.budget.command";
import { Budget } from "../../hb.core.domain";
import { AddBudgetDto } from "../dtos/budget.add.dtos";
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

}