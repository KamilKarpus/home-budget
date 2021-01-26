import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { CommandBus } from "@nestjs/cqrs";
import { ApiBearerAuth } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/common/authGuard/auth.guard";
import { Created } from "src/common/responses/created";
import { AddFixedIncomeCommand } from "../../hb.core.application/commands/add-fixed-income-command/add-fixed-income-command-handler";
import { FixedIncomeAddDto } from "../dtos/fixed-iccomes/fixed-incomes-add.dto";

@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('fixedIncomes')
export class FixedIncomeController{
    constructor(private commandBus: CommandBus){

    }

    @Post()
    async create(@Body() fixedDto : FixedIncomeAddDto){
        const id = await this.commandBus.execute(new AddFixedIncomeCommand(fixedDto.type, fixedDto.budgetId,
            fixedDto.incomeType, fixedDto.money, fixedDto.description, 
            fixedDto.dayOfIncome));

        return new Created(id);
    }

}