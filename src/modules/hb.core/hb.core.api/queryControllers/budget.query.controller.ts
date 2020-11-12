import { Controller, Get, Param, UseGuards } from "@nestjs/common";
import { QueryBus } from "@nestjs/cqrs";
import { ApiBearerAuth } from "@nestjs/swagger";
import { Guid } from "guid-typescript";
import { JwtAuthGuard } from "src/common/authGuard/auth.guard";
import { GetByIdBudgetViewQuery } from "../../hb.core.application/queries/getByIdBudgetView/get.by.id.budget.view.query";
import { GetHistoryByIdQuery } from "../../hb.core.application/queries/getHistoryByIdView/get.history.by.id.query";
import { BudgetShortView } from "../../hb.core.application/read.models/budget.short.view";
import { HistoryView } from "../../hb.core.application/read.models/history.view";


@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
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

      @Get(":id/history")
      async findHistoryById(@Param('id') id: string) : Promise<HistoryView>{
          const result = await this.queryBus.execute(new GetHistoryByIdQuery(Guid.parse(id)));
          return result;
      }
}