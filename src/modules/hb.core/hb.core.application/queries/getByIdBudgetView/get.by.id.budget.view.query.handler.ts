import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { BudgetShortViewService } from "src/modules/hb.core/hb.core.infrastructure/services/budget.short.view.service";
import { GetByIdBudgetViewQuery } from "./get.by.id.budget.view.query";

@QueryHandler(GetByIdBudgetViewQuery)
export class GetByIdBudgetViewQueryHandler implements IQueryHandler<GetByIdBudgetViewQuery> {
  constructor(private readonly service: BudgetShortViewService ) {}

  async execute(query: GetByIdBudgetViewQuery) {
    return this.service.loadById(query.Id);
  }
}