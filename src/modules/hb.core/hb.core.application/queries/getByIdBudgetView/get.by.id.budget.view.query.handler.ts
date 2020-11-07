import { Inject } from "@nestjs/common";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { BudgetShortViewService } from "src/modules/hb.core/hb.core.infrastructure/services/budget.short.view.service";
import { GetByIdBudgetViewQuery } from "./get.by.id.budget.view.query";

const ShortViewService = () => Inject('BudgetShortViewService');  

@QueryHandler(GetByIdBudgetViewQuery)
export class GetByIdBudgetViewQueryHandler implements IQueryHandler<GetByIdBudgetViewQuery> {
  constructor(@ShortViewService() private readonly service: BudgetShortViewService ) {}

  async execute(query: GetByIdBudgetViewQuery) {
    return this.service.loadById(query.Id);
  }
}