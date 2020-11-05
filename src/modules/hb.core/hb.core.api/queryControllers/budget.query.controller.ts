import { Controller, Get, Param } from "@nestjs/common";
import { QueryBus } from "@nestjs/cqrs";
import { Guid } from "guid-typescript";
import { GetByIdBudgetViewQuery } from "../../hb.core.application/queries/getByIdBudgetView/get.by.id.budget.view.query";
import { BudgetShortView } from "../../hb.core.application/read.models/budget.short.view";

@Controller('budgets')
export class BudgetQueryController{
    constructor(
        private readonly queryBus: QueryBus,
      ) {}

      @Get(":id")
      async findById(@Param('id') id: string) : Promise<BudgetShortView>{
          const result = await this.queryBus.execute(new GetByIdBudgetViewQuery(Guid.parse(id)));
          return result;
      }
}