import { Guid } from "guid-typescript";
import { BudgetShortView } from "../read.models/budget.short.view";

export interface IBudgetShortViewService{
    
    commitView(view : BudgetShortView);
 
    loadById(id: Guid) : Promise<BudgetShortView>;
 
    update(budget : BudgetShortView);

}