import { Budget, Money } from "src/modules/hb.core/hb.core.domain"


export class BudgetMapper{

    public toMoney(money){
        return new Money(money._value, money._currency); 
    }

    public toEntity(budget){
        return new Budget(budget._id, budget._name, this.toMoney(budget._totalIncome),
        this.toMoney(budget._totalExpenditure),budget._history);
    }
}