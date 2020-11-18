export class Pagination<T>{
    public CurrentPage : number;
    public TotalPages : number;
    public HasNext : boolean;
    public HasPrevious : boolean;
    public ItemCount : number;
    public PageSize : number;
    public Items : T[];


    constructor(items : T[], itemsCount : number, currentPage : number,  pageSize : number){
        this.TotalPages = Math.round(itemsCount/pageSize);
        this.ItemCount = itemsCount;
        this.CurrentPage = currentPage;
        this.HasPrevious = this.CurrentPage > 1;
        this.HasNext = this.CurrentPage <  this.TotalPages;
        this.Items = items;
    }
}