# TypeScript: The Complete Developer's Guide

## Lesson 83. Sorting Implementation

- edit index.ts
- add class Sorter to src/index.ts
- add destructuring assignment of this.colllection
- remove collection field
- place collection: number[] in constructor parameter
- Make collection: number[] access modifier public
- add method to Sorter
  - Sorter is an implementation of [Bubble Sort]() which runs in O(n^2)
- Verify, index.ts is error free
- Instantiate an instance of Sorter:
  - const sorter = new Sorter([10, 3, -5, 0]);
- console.log(sorter.collection) // -> [-5, 0, 3, 10];

```ts
// src/index.ts
// End of 83. Sorting Implementation

class Sorter {
  //   collection: number[];

  constructor(public collection: number[]) {
    this.collection = collection;
  }

  // methods
  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - (i - 1); j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          const leftHand = this.collection[j];
          this.collection[j] = this.collection[j + 1];
          this.collection[j + 1] = leftHand;
        }
      }
    }
  }
}

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
```
