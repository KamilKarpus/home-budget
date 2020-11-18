export class GrantDto{
    public Key: string;
    public SubjectId : string;
    public CreateTime : Date;
    public Experation : Date;
    public ConsumedTime : Date;

    constructor(key: string, subjectId : string){
        this.CreateTime = new Date();
        const experation = new Date(this.CreateTime);
        experation.setDate(experation.getDate()  + 90);
        this.Experation = experation;
        this.Key = key;
        this.SubjectId = subjectId;
    }

    public static load(key: string, subjectId : string, createTime : Date, experation: Date,
        consumedTime : Date): GrantDto{
        const grant = new GrantDto(key, subjectId);
        grant.CreateTime = createTime;
        grant.Experation = experation;
        grant.ConsumedTime = consumedTime;
        return grant;
    }

    public consume(){
        this.ConsumedTime = new Date();
    }

    public isConsumed() : boolean{
        return this.ConsumedTime !== undefined;
    }
}