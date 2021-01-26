export class CustomCroneExpresions{
    public static LastDayOfMonth = `1 1 ${CustomCroneExpresions.getLastDayOfMonth()} * *`


    private static getLastDayOfMonth() : number{
        var today = new Date();
        var lastDayOfMonth = new Date(today.getFullYear(), today.getMonth()+1, 0);
        return lastDayOfMonth.getDay();
    }

}