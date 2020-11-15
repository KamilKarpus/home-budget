import { Inject } from "@nestjs/common";
import { GrantDto } from "src/common/authGuard/grant.dto";
import { Model } from 'mongoose';

export class GrantStore{
    constructor(@Inject('GRANT_ITEM') private grantModel : Model<GrantDto>){

    }
    public async store(grant : GrantDto) {
        const newUser = new this.grantModel(grant);
        return newUser.save();
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