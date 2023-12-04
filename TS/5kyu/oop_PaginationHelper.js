"use strict";
class PaginationHelper {
    constructor(collection, itemsPerPage) {
        this.fullArray = collection;
        this.elementOnPage = itemsPerPage;
        this.paginatorArray = this.elemToPage();
        this.itemCount = function () {
            return this.fullArray.length;
        };
    }
    elemToPage() {
        let answer = [];
        for (let i = 0; i < Math.ceil(this.fullArray.length / this.elementOnPage); i++) {
            answer[i] = this.fullArray.slice((i * this.elementOnPage), (i * this.elementOnPage) + this.elementOnPage);
        }
        return answer;
    }
    pageCount() {
        return this.paginatorArray.length;
    }
    pageItemCount(pageIndex) {
        if (pageIndex > this.paginatorArray.length - 1 || pageIndex < 0) {
            return -1;
        }
        return this.paginatorArray[pageIndex].length;
    }
    pageIndex(itemIndex) {
        if (itemIndex > this.itemCount() - 1 || itemIndex < 0) {
            return -1;
        }
        return Math.ceil((itemIndex + 1) / this.elementOnPage) - 1;
    }
}
let pag = new PaginationHelper([1, 2, 3], 1);
console.log(pag.itemCount());
console.log(pag.paginatorArray);
console.log(pag.pageCount());
console.log(pag.pageItemCount(0));
console.log("--------------------------------");
console.log(pag.pageIndex(0));
console.log("--------------------------------");
