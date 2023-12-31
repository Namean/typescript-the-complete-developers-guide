<!-- <style>

  * {
    box-sizing: border-box;
  }

  body {
    line-height: 2px;
  }
  .light-section {
    background: gray;
    padding: 20px;
    width: 1200px;
    margin: 0 auto;
    color: white;
  }

  h3 {
    margin-left: 400px;
  }
</style> -->

# TypeScript: The Complete Developer's Guide

## [Section 9](file:///Users/allspark/Documents/src/typescript/the-complete-developers-guide/course-notes/section-9/00-Section-9.md)

### Lecture 72. Restricting Access with Interfaces

<!-- TypeScript: The Complete Developer's Guide -->
<!-- Section 9 -->
<!-- Lecture 72. Restricting Access with Interfaces -->
<!-- url: /Users/allspark/Documents/src/typescript/the-complete-developers-guide/notes/section-9 -->

- On this page
  - Bad Approach
  - <a href="file:///Users/allspark/Documents/src/typescript/the-complete-developers-guide/course-notes/section-9/72-restricting-access-with-interfaces.md#dependency-inversion">Dependency Inversion</a>

We've now seen several differnt ways of putting together <code>addMarker()</code> in a bad fashion.

We're now going to focus on the correct solution, which is perhaps the best solution.

Just a quick reminder, the issue with out current approach is that CustomMap, has a direct dependency on all the different classes inside of our application, that we want to show on the map.

CustomMap depends on both User, and Company

```ts

```

### [Bad Approach](file:///Users/allspark/Documents/src/typescript/the-complete-developers-guide/course-notes/section-9/72-restricting-access-with-interfaces.md#)

<h3 id="bad-approach"><a href="file:///Users/allspark/Documents/src/typescript/the-complete-developers-guide/course-notes/section-9/72-restricting-access-with-interfaces.md#dependency-inversion">Bad Approach</a></h3>

<section class="light-section">

The issue with our curret apporach is that CustomMap has a direct dependency on all the different classes inside of our application, that we might want to display on the map.

CustomMap depends on User, and Company,

- User
- Company

but if we ever had a CarLot or Park , then CustomMap would depend on them as well.

- CarLot
- Park

To fix this issue, we're going to invert this dependency

Rather than CustomMap, depending on all these different classes, we're going to say

Hey if you want to work with a Map, you have to satisfy the Map's requirements.

If company wants to show up on the map, you have to satisfy the maps requirements, so how are we going to invert that dependency?

</section>

<br />
<br />
<br />

### [Dependency Inversion]

<h3 id="dependency-inversion"><a href="file:///Users/allspark/Documents/src/typescript/the-complete-developers-guide/course-notes/section-9/72-restricting-access-with-interfaces.md#dependency-inversion">Dependency Inversion</a></h3>

At the top of the CustomMap file. We're going to add a bit of configuration.

This configuration is instuctions on how an object, can be an argument to the <code>addMarker</code> function

The object must have a location property, that is an object that has a latitiude and longitue that are both numbers.

As long as an object satisfies this condition, is eligible to be added as an arugment to <code>addMarker</code>

So how are we going to put together those directions?

We're going to make use of interfaces.
