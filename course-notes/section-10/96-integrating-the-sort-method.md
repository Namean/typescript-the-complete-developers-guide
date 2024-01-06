# TypeScript: The Complete Developer's Guide

## Lesson 96. Integrating the Sort Method

-problem: how awkward it is to create an instance of Sorter to sort any given collection

- We're going to figure out how we can add a sort method to out three different collections
- Saving us from re-implementing sort every single time
- Implementing inheritance
- We are just discussing how it's really awkward to have to create an instance of Sorter in order to
  sort any given collection.

So in this video, we're going to figure out how we can add a sort method to our three different collections.
And of course, we want to make sure that each of these sort methods are still going to have some amount
of code reuse.

So we don't want to have to re-implement sort every single time.

### Inheritance

So I think that there's probably going to be a pretty clear direction to move to make this happen.
I think that a pretty clear solution would be to use classic inheritance.

Remember, we spoke about inheritance a couple of sections ago.

Inheritance is where we have different classes and we want to somehow share code between them.

So in this case, we want to make this sort method available on the numbers collection, on characters

in on length list.

So we can kind of imagine that we will copy paste all the methods of Sauder down to these classes.

Remember, there is no actual like copy paste of methods going on.

This is just a convenient way to imagine this relationship.

So now we would refer to Sorter as the parent class or the superclass of numbers, characters and linked

list.

So we are using Sorter to extend these three child classes.

So if we did this, we would then have a sort method on each of these different classes.

There's only one implementation of sort and that's defined back inside of Sorter.

So we're not duplicating any code or anything like that.

So this would definitely work, but we would have to fix up one or two things really quickly.

Let me just make sure it's really clear what we would have to fix.

So let's imagine.

Sauder by itself right now, like as our code stands presently, right now, sorter has collection and

any time we call sort, sort is going to operate on that collection property.

Remember, collection is like our instance of numbers collection or string characters collection or

whatever else it is.

So with what we are now describing, if sought is going to exist directly on numbers, collection and

whatnot, no longer do we really need a collection property.

Instead, we can just refactor sort to call numbers, collections, swap method, call its compare method

and refer to its length property directly.

So all I really mean to say here is that if we look at our sorter right now, here it is right here.

I don't think we need to have this collection, this collection, this collection.

It's just going to be this dot compare and this swap and this dot length and so on.

So I think that's really the only fix up we're going to have to do here.

So I think this all sounds pretty good.

So let's take a quick pause and we'll start this refactor in the next video.
