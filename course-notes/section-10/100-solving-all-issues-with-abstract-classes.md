# TypeScript: The Complete Developer's Guide

## Lesson 100. Solving All Issues with Abstract Classes

### LinkedList

- If Child class doesn't define a constructor we don't have to call super()
- The parent class in this case Sorter's constructor will be called automatically for us instead.

- As we uncomment notice we get an error around new Sorter(linkedList), this is because Sorter is an abstract class and we are not allowed to create an instance of an abstract class.
