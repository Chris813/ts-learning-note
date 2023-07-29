// class Sorter{
//     collection: number[];
//     constructor(collection: number[]){
//         this.collection = collection;
//     }
//     sort(): void{
//         const { length } = this.collection;
//         for(let i = 0; i < length; i++){
//             for(let j = 0; j < length - i - 1; j++){
//                 if(this.collection[j] > this.collection[j + 1]){
//                     const leftHand = this.collection[j];
//                     this.collection[j] = this.collection[j + 1];
//                     this.collection[j + 1] = leftHand;
//                 }
//             }
//         }
//     }
// }

// const sorter = new Sorter([10, 3, -5, 0]);
// sorter.sort();
// console.log(sorter.collection);
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('Xaayb');
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
linkedList.print();

