import { NumbersCollections} from "./NumbersCollections"
import { Sorter } from "./Sorter"
import { StringCollections } from "./StringCollections"

const numbersCollections = new NumbersCollections([9,5564,33387,55,2,111,4,7,8,6,3,25])
const sorter = new Sorter(numbersCollections)
const stringSort = new StringCollections('abBAaAEqaetasac')

sorter.sort()
const sorterString = new Sorter(stringSort)
sorterString.sort()
console.log(`sorterString`, sorterString)
// console.log(`sorter`, numbersCollections.data)