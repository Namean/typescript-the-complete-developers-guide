# TypeScript: The Complete Developer's Guide

## Lesson 97. Issues with Inheritance

In this video we're going to start to refactor our code and have Sroter serve as a parent class to

- NumbersCollection: number
- CharactersCollection: string
- LinkedList: number

### Getting started wit NumbersCollection

Let's setup Sorter as a parent to NumbersCollection

Don't forget that sorter has code that expects to operate on some collection proeprty

There is not going to be any more collection proeprty because we are pictureing that with inheritance that sort method will be copy pasted direclty onto numbers collection.

inside src/NumbersCollection.ts

- import sorter
- NumbersCollection extends Sorter
- Any time we have a class inside of TypeScript that inherits from another
  - the child class must call super() inside of its constructor.
  - we still have an error
  - hovering we see, "Expected 1 arguments, but got 0"
  - Constructors usually have initialization logic
  - However Sorter does not, but does expect a collection
  - Remember we don't care about collection anymore
- refactor sorter

In the previous implementation we wanted to instantiate Sorter as its own object, passing collection we wanted to sort to it.

Now we are doing things differently.

Image that NumbersCollection is going to get its own sort() method.

Now that part I've repeated like three times now in the last 5 minutes because it's really important

for you to understand.

So I just want to reiterate one more time why that's so important.

So we are imagine here that by having Sorter serve as the parent class, we are picturing that sorter gets copy pasted.

Down into numbers collection like this.

We are picturing that that's not like quite what is happening.
We're just imagining this is what is going to happen.

And so inside of our sort method, rather than operating on this collection, because there is not going to be any more `this.collection`, our sort method would just refer to this.length

So that would be the length getter that we defined right here.

```ts
export class Sorter {
  constructor(public collection: Sortable) {}

  sort(): void {
    // const { length } = this.collection;
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        // if (this.collection.compare(j, j + 1)) {
        if (this.compare(j, j + 1)) {
          //   this.collection.swap(j, j + 1);
          this.swap(j, j + 1);
        }
      }
    }
  }
}
```

So I'm going to delete that sort method because again, I just want you to really keep that in mind

very closely, because that's going to be extremely important in just a second.

### Refactor Sorter

- remove constructor
- we'll see some error messages.

### Intersting problems

And then right away, we're going to see some error messages.

So this right here is a real interesting problem.

- hover over the error message

"Property 'compare' does not exist on type 'Sorter'

Now, this is simultaneously surprising and not surprising.

Let me tell you why.

### Last Section

Now, this is simultaneously surprising and not surprising.

Let me tell you why.

It is surprising and not surprising both reasons.

So the reason that this is surprising is that you and I have now just discussed that we are not going

to ever instantiate Sorter directly.

Remember, that's the entire point of the refactor we are doing here.

Having to create an instance of the sorter is super awkward and so we just want to use Sorter as a parent

class that we can inherit from.

That's the only reason we have Sorter.

Now, sorter is supposed to be some like canonical implementation of the sort method that we don't want

to have to rewrite over and over and over again.

So we just want to take this method and copy paste it down to these child classes.

We never, ever expect to instantiate Sorter directly.

So you and I know very well that when we take Sauder and we try to extend it on, or when we try to

extend some child class with Sauder, there will be a compare, a swap and a length property available

numbers collection has length, it has compare and it has swapped.

So you and I know that the only place that we are ever going to use Sorter, is going to have those properties defined.

- The issue here is that TypeScript doesn't know that.

You and I know that this is the only place we're going to use Twitter, but TypeScript doesn't have

any indication of that whatsoever.

- TypeScript is trying to analyze this class in isolation.

It's trying to look at this block of code and say, okay, let's see, let's look at the sort method

inside there.

They've got a reference to something called this compare.

All right.

Well, does this class have a method called compare?

Nope.

Sure.

Doesn't mark that as an error.

It's then going to look at this swap.

Is there a swap property here?

No.

OC mark it as an error.

So even though you and I know that we're never going to instantiate this directly, we're only ever

going to use it as a parent class.

And once we do, there will be a.

Length compare and swap method available, but TypeScript just plain doesn't know that.

So to fix this problem and help TypeScript understand that, hey, it's okay that these methods aren't

defined here, we have to add in a little bit more code to our class.

So let's take a quick pause right here.

We're going to come back in the next video and talk about exactly how we're going to solve this problem.
