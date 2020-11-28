export class Pagination<T>{
    public CurrentPage : number;
    public TotalPages : number;
    public HasNext : boolean;
    public HasPrevious : boolean;
    public ItemCount : number;
    public PageSize : number;
    public Items : T[];
    public StartIndex : number;
    public EndIndex : number;
    public Pages: number[];



    constructor(items : T[], itemsCount : number, currentPage : number,  pageSize : number,
        maxPages : number){
        this.TotalPages = Math.round(itemsCount/pageSize);
        this.ItemCount = itemsCount;
        this.CurrentPage = currentPage;
        this.HasPrevious = this.CurrentPage > 1;
        this.HasNext = this.CurrentPage <  this.TotalPages;
        this.Items = items;
        this.StartIndex = ((currentPage - 1) * pageSize)+1;
        this.EndIndex = Math.min((this.StartIndex + pageSize) - 1, this.ItemCount);

        var startPage, endPage;
        if(this.TotalPages <= maxPages){
            startPage = 1;
            endPage = this.TotalPages;
        }else{
            
            let maxPageBeforeCurrentPage = Math.floor(maxPages/2);
            let maxPagesAfterCurrentPage = Math.ceil(maxPages/2);
            if(this.CurrentPage <= maxPagesAfterCurrentPage){
                startPage = 1;
                endPage = maxPages;
            }else if(currentPage + maxPageBeforeCurrentPage >= this.TotalPages){
                startPage = this.TotalPages - maxPages;
                endPage = this.TotalPages;
            }
            else{
                startPage = currentPage - maxPageBeforeCurrentPage;
                endPage = currentPage + maxPageBeforeCurrentPage;
            }
        }
        this.Pages = Array.from(Array((endPage)+1 - startPage).keys()).map(i => startPage + i);  

    }
}