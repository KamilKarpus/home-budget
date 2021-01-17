
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { IBudgetRepository } from "src/modules/hb.core/hb.core.domain/repositories/budget.repository.interface";
import { Inject } from "@nestjs/common";
import { AddExpenditureCommand } from "./add.expenditure.command";
import { IReceiptViewModelService } from "../../contracts/receipt.view.model.interface";
import { IFileStorage } from "src/bulding.blocks/application/file.storage.interface";
import { ReceiptViewModel } from "../../read.models/receipt.view.model";

const BudgetRepository = () => Inject('BudgetRepository');
const ModelViewService = () => Inject('ReceiptViewModelService');
const FsStore = () => Inject('FileStorage');

@CommandHandler(AddExpenditureCommand)
export class AddExpenditureCommandHandler implements ICommandHandler<AddExpenditureCommand> {
  constructor(@BudgetRepository() private repository: IBudgetRepository,
              @ModelViewService() private modelViewService: IReceiptViewModelService,
              @FsStore() private fileStorage : IFileStorage) {}

    async execute(command: AddExpenditureCommand): Promise<any> {

       console.log(this.fileStorage);
       const budget = await this.repository.findById(command.Id);
       const trascationId = budget.addExpenditure(command.Expenditure,
            command.Reason);
        await this.repository.update(budget);

        const { files } = command;
        if(files.length>0){
            var viewModel = ReceiptViewModel.create(command.Id.toString(), trascationId);
            for(let i =0; i<files.length;i++){
                var fileExt = files[i].originalname.split('.').pop();
                const fileName = `${trascationId}_${i}.${fileExt}`;
                viewModel.fileUrls.push(await this.fileStorage.uploadFile(files[i], fileName));
            }
        }
        await this.modelViewService.add(viewModel);
      
    }

}