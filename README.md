![TypeScript: The Complete Developer's Guide](https://img-b.udemycdn.com/course/240x135/2337318_abfd_5.jpg "Title")
[TypeScript: The Complete Developer's Guide](https://www.udemy.com/course/typescript-the-complete-developers-guide/)

There are a few project in the course, they can be found at the following:

- Projects:
  - [fetchjson](https://github.com/Namean/fetchjson)
  - [features](https://github.com/Namean/features)
  - [Maps](https://github.com/Namean/maps)
  - [Sort](https://github.com/Namean/sort)
  - [Stats](https://github.com/Namean/stats)

### Maps

- [Maps](https://github.com/Namean/maps)
  - Uses Google Maps to display, user defined objects.
  - Demonstrates use of dependency inversion via an interface called Mappable
  - Which allows any object that satisfies, i.e. implements the interface to be display on the map.
  - Uses Parcel to transpile and bundle TypeScript code into the browser

### Sort

| Complete |                  Lesson Name                  |  asdf |
| -------- | :-------------------------------------------: | ----: |
| True     |             87. Why is This Bad?              | $1600 |
| True     |           88. Extracting Key Logic            |   $12 |
| True     |    89. Separating Swapping and comparison     |    $1 |
| True     |              90. The Big Reveal               |    $1 |
| True     |           91. Interface Definition            |    $1 |
| True     |       92. Sorting arbitrary collections       |       |
| True     |        93. Linked List Implementation         |       |
| True     |        94. Completed Linked List Code         |       |
| True     |             95. Just One More Fix             |       |
| True     |        96. Integrating the Sort Method        |       |
| True     |          97. Issues with Inheritance          |       |
| True     |             98. Abstract Classes              |       |
| True     |         99. Why Use Abstract Classes          |       |
| True     | 100. Solving All Issues with Abstract classes |       |
| True     |      101. Interfaces vs Abstract classes      |       |

This project demonstrates how an interface to an a simple algorithm can be used to save time and provide an abstraction from the complexity of implementing a sorting algorithm for each data structure.

For example we have three data structures that we want to be able to sort.

- NumbersCollection
- CharactersCollection
- Linked List

Initially we take a "Bad Approach" that takes in a collection of numbers, and sorts them. However requirements change and we need to be able to sort strings as well. Due to the immutaiblity of strings, we may not sort them in the same way we sorted the collection of numbers. Therefore we must have a different approach to sorting strings than collections of numbers.

One way we would approach this is adding a control flow statement, checking the type of collection

```ts


  for (let j = 0; j < length - (i - 1); j++) {
        // All of this only works if collection is number[]
        // If collection is an array of numbers
        if (this.collection instanceof Array) {
          if (this.collection[j] > this.collection[j + 1]) {
            const leftHand = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = leftHand;
          }
        }

        // Only going to work if collection is a string
        // If collection is a string, do this logic instead:
        // ~~~logic to compare and swap characters in
        if (typeof this.collection === 'string') {

        }
      }
    }
  }

```

The reason this is a bad is approach is the same as for a previous project, where we had to update the Union for each new type we needed to support, where the solution to such problem is to invert the dependency using an interface.

"
The reason it is bad is that if we ever want to add support for sorting some other type of data collection,

we would have to come back to our sorter and start to really change a bunch of data in here.

If we eventually end up with like 50 different types of things that were supposed to be sortable, well,

then all of a sudden we're going to have 50 nested if statements inside of here all essentially maybe"

In the last video we spoke about why this was not a great approach.

Because it results in having to update Sort.sort() with new types that need to be sorted.

Which can be solved with depenedency inversion, by creating an interface, and having each type implement "Sortable"

- Bubble Sort Algorithm
- Must be customized to the data structure we are working with

- Operation 1 - Comparison must be customized between two elements
  -Operation2 - The swapping logic has to be customized.

The entire key to everything

Around this bubble sort algorithm and the whole reason that it doens't work that well with these very different types is that we've got two operators that are going to have to be customized depending upon the data struture we are working with.

- extract the comparison logic into a helper function in a different class.
- we're also going to extract the swapping logic into a different class as well.

So our sorter isn't going to contain a direct reference to an array of numbers.

Instead we're going to have our sorter have a direct reference to some new thing that we're going to create called a NumbersCollection.

```ts
export class NumbersCollection {
  constructor(public data: number[]) {}

  // methods

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}
```

## Lesson 90. The Big Reveal

Its time to figure out how the project is going to be in its final form.

So the last thing we really need to fix, is that sorter can only take a numbers.

We need to make sure that Sorter can take other types of collections as well.

In the sorter class we're going to define an interface, and this interface is going to provide some instructions to other classes on our project.

On how they can be eligible for sorting.

The thing we are trying to sort: collection

On collection we need three different things

- length
- compare method
- swap method

Characters collection is going to wrap up a string that we want to sort in order to sort that string.

All you and I have to do is define a swap method that's going to swap two characters inside that string.

A compare method that's going to compare two characters inside that string.

And a length property that says how long that string is.

interface Sortable {
length: number;
compare(leftIndex: number, rightIndex: number): boolean;
swap(leftIndex: number, rightIndex: number): void;
}

The goal of this project is to take each of these different data structures and sort them
from least to greatest.

Array of numbers [10, 5, 18, -3] ---> [-3, 5, 10, 18]
String 'PoaJB' ---> 'aBJoP'
LinkedList [10->-3->27->5] ---> [-3->5->10->27]

### Stats

| Complete |                 Lesson Name                 | asdf |
| -------- | :-----------------------------------------: | ---: |
| T        |            102. Project Overview            |    - |
| T        |             103. Project Setup              |    - |
| T        |                104. CSV DATA                |    - |
| F        |     105. Type Definition Files - Again!     |    - |
| F        |           106. Reading CSV Files            |    - |
| F        |          107. Running an Analysis           |    - |
| F        |         108. Losing Dataset Context         |    - |
| F        |              109. Using Enums               |    - |
| F        |           110. When to Use Enums            |    - |
| F        |         111. Extracting CSV Reading         |    - |
| F        |               112. Data Types               |    - |
| F        |    113. Converting Data Strings to Dates    |    - |
| F        |         114. Converting Row Values          |    - |
| F        |            115. Type Assertions             |    - |
| F        |     116. Describing a Row with a Tuple      |    - |
| F        |     117. Not Done with FileReader Yet!      |    - |
| F        |       118. Understanding Refactor #1        |    - |
| F        |       119. Creating Abstract Classes        |    - |
| F        |      120. Variable Types with Generics      |    - |
| F        |       121. Apply a Type to a Generic        |    - |
| F        |           122. Alternate Refactor           |    - |
| F        |       123. Interface - Based Approach       |    - |
| F        |  124. Extracing Match References - Again!   |    - |
| F        |           125. Transforming Data            |    - |
| F        |       126. Updating Reader References       |    - |
| F        |       127. Inheritance vs Compisition       |    - |
| F        |   128. More on Inheritance vs Compisition   |    - |
| F        | 129. A Huge Misconception Around Compisiton |    - |
| F        |          130. Goal Moving Forward           |    - |
| F        |      131. A Compisiton-Based Approach       |    - |
| F        |     132. Implementing an Analyzer Class     |    - |
| F        |         133. Building the Reporter          |    - |
| F        |        134. Putting it All Together         |    - |
| F        |        135. Generating HTML Reports         |    - |
| F        |            136. One Last Thing!             |    - |
| F        |              137. Opps, My Bad              |    - |
| F        |               138. App Wrapup               |    - |
