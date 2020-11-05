import { Body, Controller, Post } from "@nestjs/common";
import { Guid } from "guid-typescript";
import { Budget } from "src/modules/hb.core.domain";
import { BudgetRepository } from "src/modules/hb.core.infrastructure/repositories/budget.repository";
import { AddBudgetDto } from "../dtos/budget.add.dtos";

@Controller('budgets')
export class BudgetController{
    constructor(private readonly repository : BudgetRepository){

    }

    @Post()
    async Create(@Body() addBudgetDto : AddBudgetDto){
        const id = Guid.create();
        this.repository.create(new Budget(id, addBudgetDto.name));
    }

}