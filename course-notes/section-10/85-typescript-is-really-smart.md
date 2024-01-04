# TypeScript: The Complete Developer's Guide

## Lesson 85. TypeScript is Really Smart

- We need to design algorithm to work for strings and array of numbers as well as linked lists eventually

- solve issue of string differenes from Arrays

- Take bad approach first
- the reason to take bad approaches are some ways that new engineers might decide to try

### Bad Solution / PitFalls

- add if statments to branch on collection type
- figure out what type the collection is.
- update the annotation on collection to say collection can be an array of numbers or strings
  - constructor(public collection: number[] | string) // utiliees the union operator
  - There's a very big implication by using this OR operator right here
  - REVIEW: Union Operator method intersection
    - We tried using OR operator on Company and User
    - When we used it TypeScript behind the scences will restrict the,
    - properties that we can access on  the resulting type
    - in this case 'location'
    - We can only access common properties between number[], and string, why is this relevant?
      - When using Union operator there's a deeper comparison than just different properties
      - Arrays can do direct index access, while strings are not allowed
      - now TypeScript checks the different features  or syntax that are allowed, around both of these types as well
      - TypeScript is 100% aware that we can update values inside of an array by using that index notation
      - TypeScript knows we can't index a string index and update its value
      - Index signature in type 'string | number[]' only permits reading
      
      - Once we add the typechecking step, and understand the error message
      - we're going to add typechecking in the next lesson.


    ```ts
    
    Company {
      companyName: string,
      catchPhrase: string,
      location: { lat: number, lng: number }
    }

    User {
      name: string,
      location: { lat: number, lng: number }
    }
    
    ```

```ts
class Sorter {
  //   collection: number[];

  constructor(public collection: number[] | string[]) {
    this.collection = collection;
  }

  // methods
  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      // if collection is an array of numbers
      for (let j = 0; j < length - (i - 1); j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          const leftHand = this.collection[j];
          this.collection[j] = this.collection[j + 1];
          this.collection[j + 1] = leftHand;
        }

        // If collection is a string, do this logic instead
        // ~~~ logic to compare and swat characters in a string
      }
    }
  }
}
```

### Resources

[35 Sets (Set)](https://exploringjs.com/impatient-js/ch_sets.html#missing-set-operations)


```js

let company = {
  comapanyName: '',
  catchPhrase: '',
  location: {
    lat: '',
    lng: ''
  }
}

let user = {
  name: '',
  location: {
    lat: '',
    lng: ''
  }
}

const c = new Set(Object.keys(company));
const d = new Set(Object.keys(user));

const intersection = new Set(
  Array.from(c).filter(x => d.has(x))
);

console.log(intersection); // location

```