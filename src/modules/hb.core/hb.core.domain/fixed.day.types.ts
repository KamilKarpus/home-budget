export class FixedTypesDays{
    private _id: number;
    private _name: string;

    public static firstDayOfMonthId : number = 1;
    public static lastDayOfMonthId : number = 2;
    public static dailyId : number = 3;
    public static fixedId : number = 4;

    constructor(id : number, name : string) {
        this._id = id;
        this._name = name;
    }

    public static firstDayOfMonth =  new FixedTypesDays(FixedTypesDays.firstDayOfMonthId, "firstDayOfMonth");

    public static lastDayOfMonth =  new FixedTypesDays(FixedTypesDays.lastDayOfMonthId, "lastDayOfMonth");

    public static daily =new FixedTypesDays(FixedTypesDays.dailyId, "daily");

    public static fixed =  new FixedTypesDays(FixedTypesDays.fixedId, "fixed");

    private static _types : FixedTypesDays[] = [FixedTypesDays.firstDayOfMonth, FixedTypesDays.lastDayOfMonth, FixedTypesDays.fixed, FixedTypesDays.daily];


    public equal(days :FixedTypesDays){
        return days._id = this._id;
    }

    public static from(id : number) : FixedTypesDays{
        return this._types.filter(p=>p._id === id)[0];
    }

    public getId() : number{
        return this._id;
    }
}