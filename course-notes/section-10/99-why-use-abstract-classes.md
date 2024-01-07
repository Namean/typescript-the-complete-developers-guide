# TypeScript: The Complete Developer's Guide

## Lesson 99. Why Use Abstract Classes?

- mark Sorter as an Abstract class
- Tell TypeScript eventually the contract methods will be defined
- The abstract is used to mark cetain methods as existing in the future, or implemented by some child class

<code>abstract compare(leftIndex: number, rightIndex: number): boolean;</code>

```diff
- var value = 6;
+ var value = 7;

```

```diff

diff --git a/./sorter.ts b/./sorterAbstract.ts
index 034995a..eee3afd 100644
--- a/./sorter.ts
+++ b/./sorterAbstract.ts
@@ -1,4 +1,8 @@
-export class Sorter {
+export abstract class Sorter {
+  abstract compare(leftIndex: number, rightIndex: number): boolean;
+  abstract swap(leftIndex: number, rightIndex: number): void;
+  abstract length: number;
+
   sort(): void {
     const { length } = this;
```

```typescript
export class Sorter {
  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
```

```typescript
export abstract class Sorter {
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
```

- Now TypeScript can analysize the methods in isolation
- NumbersCollection must fulfill its contract to implement these methods AND the appropriate signatures i.e. function signatures.

All right, so that's it.

That is abstract classes.

So again, we are going to use them any time that we want to provide some like reusable implementation

of some function.

But that function might depend upon some other functions that we cannot yet implement because these

need to be functions that are very specific to the different child classes that we are trying to inherit

this thing into.

Remember, compare is going to be very different in our numbers collection versus string collection

and so on.

So we are saying at some future point in time we will have a customized version of compare or swap or

length available to Sauder.

All right.

So it looks good.

So let's take a quick pause right here.

When we come back in the next video, we're going to test out this code and then refactor our characters

collection and link list as well.

So I'll see you in just a minute.
