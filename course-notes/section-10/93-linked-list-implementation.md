# TypeScript: The Complete Developer's Guide

## Lesson 93. Linked List Implementation


### Recap


In the last video, I repeated probably I think three times total that by using this interface we don't

have to memorize a sorting algorithm.

Instead, we just have to know that we have to implement these three functions.

I know, like I said, I repeated that probably at least three times.

Again, that is the entire significance of using interfaces.


You're going to see a lot of documentation around TypeScript out there saying, Oh yeah, TypeScript

is great because we can make these interfaces to describe the structure of an object or something like

that.

And that's technically true, but that is like really playing down the useful enough usefulness of interfaces.

You interfaces are useful not because we can describe a type, it's because we can set up a contract

between one class and another class and say, Hey, if you do X, Y, Z, imagine all the functionality

I'm going to give you.

That's why we care about interfaces in TypeScript.



### Something to keep in mind

Something that's kind of intersting to keep in mind is that the interface only speicifies the property names and respective types of some other class or some other object.


The Sortable interface doens't actaully make any claims about these methods doing the correct thing.

So in other words we can actually define a class that has a compare function with these arguments and that return value and a swap method with these arugments

And both of these methods could do the totally incorrect thing, like maybe compare returns always false or always true.


### TypeScript will not help with implementation details
on the methods, their inputs, and types, and return type

And maybe Swap doesn't actaully swap anything at all, but nonetheless has the correct arguments.

If we had incorrect implementation of these methods, TypeScript is not going to help us out with that at all


So the interface doest nothing to guarantee we are doing the correct thing insde these methods.

it just make sure that these methods exist and have the appropriate types. That's it.


Let's talk about what were going to actaully try to achieve in this video


### Linked List Implementation

We're going to 


The only reason we are doing this linked list is to prove to you that by using this interface, you don't have to memorize these, like super nitty gritty algorithms of how to sort something for instance.


Once again, I've got to tell you, I don't think the majority of engineers out there could tell you how to sort a linked list off the top of their head.


However, if we have this kind of interface setup, we turn the problem from sorting a linked list into comparing two elements in a linked list getting the length, and swapping two elements.

In a linked list, which is way easier to figure out how to do then actaully having to implement sorting on a linked list.



So again, the only reason we're going to go through the linked list stuff here.

So with that in mind, w'ere not really going to be doing a lot of TypeScript specific stuff in this implementation.

And so if you don't care about linked lists at all, feel free to skip this video.





### Structure of a Linked List

In the linked list data structure we have a series of nodes. 
every node contains one value. 
A value can be of any arbitrary type. 
but our linked list is going to store numbers

So every node is going to have a single number

It's also going to have a refernce to the next node inside of a chain, when we get all the way down to the last node.

The very lasy one is going to reference a value of null, and that means that we've hit the end of our chain.


So we're going to have two classes in total.

 - Node: represents each individual node
 - LinkedList: 
    - Linked list class is going to have a reference to the head node.
    - Has a bunch of methods associated with it. to manipulate the overall list.
    - length(): returns the total number of nodes
    - add(): add in new nodes
    - at(): to return the element at a specific index in the chain
    - compare():
    - swap():
    - print(): iterates through each value, printing each value inside the linked list.




### src/LinkedList.ts

- touch LinkedList.ts
- Both LinkedList and Node are going to be in the same file, to save time

We're going to define the next property with the standalone notation up here because I don't want to define the next node in the chain when we create a node.

Instead, I want to create a node first
then associate it with some other node in the chain later on.


So that's why I'm not sticking next inside the constructor,


