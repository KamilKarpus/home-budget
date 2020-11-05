import { Body, Controller, Post } from "@nestjs/common";
import { CommandBus } from "@nestjs/cqrs";
import { Guid } from "guid-typescript";
import { CreateBudgetCommand } from "../../hb.core.application/commands/create.budget.command/create.budget.command";
import { Budget } from "../../hb.core.domain";
import { AddBudgetDto } from "../dtos/budget.add.dtos";
import { Created } from "../responses/created";



@Controller('budgets')
export class BudgetController{
    constructor(private commandBus: CommandBus){

    }

    @Post()
    async Create(@Body() addBudgetDto : AddBudgetDto){
        const id = await this.commandBus.execute(new CreateBudgetCommand(addBudgetDto.name));
        return new Created(id.value); 
    }

}