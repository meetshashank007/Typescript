import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numberCollection = new NumbersCollection([10, 3, -10, -5, 0]);

const sorter = new Sorter(numberCollection);
sorter.sort();
console.log(numberCollection);
