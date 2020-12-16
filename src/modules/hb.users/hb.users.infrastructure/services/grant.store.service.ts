import { Inject } from "@nestjs/common";
import { GrantDocument, GrantDto } from "src/common/authGuard/grant.dto";
import { Model } from 'mongoose';

export class GrantStore{
    constructor(@Inject('GRANT_ITEM') private grantModel : Model<GrantDocument>){

    }
    public async store(grant : GrantDto) {
        this.grantModel.insertMany(grant);
    }

    public async load(key : string) : Promise<GrantDto> {
        const grantStore = await this.grantModel.findOne({Key: key});
        return GrantDto.load(grantStore?.Key, grantStore?.SubjectId, grantStore?.CreateTime, 
            grantStore?.Experation, grantStore?.ConsumedTime);
    }

    async update(grantDto : GrantDto){
        await this.grantModel.updateOne({Key: grantDto.Key}, grantDto);
    }

}