
import { Budget, Money } from "src/modules/hb.core.domain";
import { BudgetHistory } from "src/modules/hb.core.domain/history";
import { BudgetDto, HistoryDto, MoneyDto } from "../../dtos/budget.dtos";


export class BudgetMapper{
    
    public moneyToDto(money : Money) : MoneyDto{
        return {
            value: money.getValue(),
            currency: money.getCurrency()
        }
    }

    public historyToDto(history :BudgetHistory[]) : HistoryDto[]{
       var dto = history.map(p=>({
            _id : p.getId(),
            change: this.moneyToDto(p.getMoney()),
            type : p.getType().getId(),
            reason: p.getReason(),
            occuredOn: p.getDate()
        }));
        return dto;
    }

    public ToDto(budget : Budget) : BudgetDto {
        return {
            _id : budget.getId(),
            history : this.historyToDto(budget.getHistory()),
            totalIncome : this.moneyToDto(budget.getTotalIncome()),
            totalExpenditure : this.moneyToDto(budget.getTotalExpenditure())
        }
    }

}