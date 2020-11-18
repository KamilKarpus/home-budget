export class Money{
    private _value: number;
    private _currency: string;

    constructor(value : number, currency: string) {
        this._value = value;
        this._currency = currency;
    }

    public static of(value : number, currency : string) : Money{
        return new Money(value, currency);
    }

    public static default(){
        return new Money(0, "");
    }

    public static empty(currency : string){
        return new Money(0, currency);
    }

    public add(money : Money) : Money{
        if(money._currency === this._currency && !this._currency){
            //throw exception
        }
        return new Money(this._value + money._value, money._currency);
    }

    public sub(money : Money) : Money{
        if(money._currency === this._currency && !this._currency){
            //throw exception
        }
        return new Money(this._value - money._value, money._currency);
    }


    public getValue() : number{
        return this._value;
    }

    public getCurrency() : string{
        return this._currency;
    }
}