import { Body, Controller, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { CommandBus } from "@nestjs/cqrs";
import { Guid } from "guid-typescript";
import { AddIncomeCommand } from "../../hb.core.application/commands/add.income.command/add.income.command";
import { CreateBudgetCommand } from "../../hb.core.application/commands/create.budget.command/create.budget.command";
import { AddBudgetDto } from "../dtos/budget.add.dtos";
import { AddIncomeDto } from "../dtos/budget.income.dtos";
import { AddExpenditureCommand } from "../../hb.core.application/commands/add.expenditure.command/add.expenditure.command";
import { ExpenditureDto } from "../dtos/budget.expenditure.dto";
import { Created } from "src/common/responses/created";
import { JwtAuthGuard } from "src/common/authGuard/auth.guard";
import { ApiBearerAuth } from "@nestjs/swagger";
import { HbRequest } from "src/common/authGuard/user.request";


// @UseGuards(JwtAuthGuard)
// @ApiBearerAuth()
@Controller('budgets')
export class BudgetController{
    constructor(private commandBus: CommandBus){

    }

    @Post()
    async create(@Body() addBudgetDto : AddBudgetDto, @Req() request : HbRequest){
        
        const id = await this.commandBus.execute(new CreateBudgetCommand(addBudgetDto.name,
            Guid.create().toString(), addBudgetDto.currency));
        return new Created(id.value); 
    }

    @Put(":id/income")
    async updateIncome(@Param('id') id: string, @Body() incomeAdded : AddIncomeDto){
        await this.commandBus.execute(new AddIncomeCommand(Guid.parse(id), incomeAdded.Income, 
            incomeAdded.Reason));
    }

    @Put(":id/expenditure")
    async updateExpenditure(@Param('id') id: string, @Body() expenditure : ExpenditureDto){
        await this.commandBus.execute(new AddExpenditureCommand(Guid.parse(id),
            expenditure.Expenditure, expenditure.Reason));
    }

}