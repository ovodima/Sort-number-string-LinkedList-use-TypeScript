interface Sortable {
    length: number
    compare(leftIndex:number, rightIndex:number) : boolean
    swap(leftIndex:number, rightIndex:number) : void
}
 
export class Sorter {
    constructor(public collection: Sortable ) {}

    sort(): void {
        const {length} = this.collection

        for (let i = 0; i < length; i++) {
         // If collection is an array of number
         // Security Types
           for (let j = 0; j < length - i - 1; j++) {
                    // collection has type of Array of number[]
                    if(this.collection.compare(j, j + 1)) {
                        this.collection.swap(j, j + 1)
                    }
            }
        }
    }
}