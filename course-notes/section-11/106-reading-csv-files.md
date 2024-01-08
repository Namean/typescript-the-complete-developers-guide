# TypeScript: The Complete Developer's Guide

## Section 11: Reusable Code

### Lesson 106. Reading CSV Files

Now that we've got a successful import statement for the FS module, we can make use of that to actually

read the contents of our football CSV file.

So underneath the import statement I'll add in const matches is going to be

<code>readFileSync()</code> like so.

Now the first argument here is going to be the name of the file we want to open, which is football.csv

<!-- readFileSync options, utf-8 -->

The second argument is going to be an options object.

<!-- line: 4 -->

Inside this object, we're going to add in a flag of encoding and set it to UTF-8.

```ts
import fs from "fs";

const matches = fs.readFileSync("football.csv", {
  encoding: "utf-8", //
});
```

<!-- ASIDE -->

- So a quick aside here on what this flag does.

- With the <code>readFileSync()</code> method, we can read any type of file, an image an executable, a JSON file or CSV.

- By adding on encoding UTF-8
- we are telling <code>readFileSync()</code> about what type of content we expect to find inside a football.csv.

- This is saying we expect there to be text content in there encoded with UTF-8.

- So by adding on this encoding flag, we are essentially telling fs.<code>readFileSync()</code> to return a string to us.

- If we did not add on that encoding flag, it would instead give us back something called a buffer with the raw data out of that file
- which is not what we want in this case.

- We just want a string representing the contents of the CSV file.

- So now matches should be a string that contains all the different match data out of our CSV.

- To make sure that's the case, I'll add in a quick console log matches like so.

- Then I'll flip on over to my terminal. And I should see all my match data up here.
  <!-- Add image of match data here...  -->
- Okay, so this looks good, but having all this data in one single gigantic string is not super useful.

- We're going to eventually want to be able to iterate over all the different matches and run some sort of analysis.

- So I think that we need to somehow parse the information in this big string into some, more usable data structure.

- So let's take a look at a diagram to understand how we're going to parse all this stuff.
<!-- Add image of diagram 2:05/5:04 -->

- All right. So here's the idea.
- Right now, we've got one big string that contains all the different matches.
- In this diagram, I'm only showing two of the rows in there.
- In reality, we have many more rows, of course.

- So to get this in a more usable data structure, I'm going to first call split with a new line character on that string.

- Just so you know, that backslash n inside of a string represents a new line character and it essentially says, okay, take all these different rows and parse them or split them into an array of strings where each inner string right here represents one single match.

- Then after we do that, still working with a array of strings where each string represents one match is not super useful.

- So we'll do one more step inside of here to parse this.
- We'll do a map operation where we will map over each individual string and we will split on the comma inside there.

- So comma there, comma there, comma there and so on.

- And so we're going to eventually end up with a two dimensional array of strings where each inner array.

As first the date as a string.

Then the home team has a string, then the away team has a string and so on.

So that's how we're going to parse this into a more usable data structure.

All right.

### edit index.ts

- So I'm going to flip back over to my editor.
- I'm going to find the closing semicolon or the ending semicolon on <code>readFileSync()</code>.

- I'm going to remove it and I'm going to chain on a dot split statement like so.

- So I'm going to split by new line.

- I'll do a quick save.

```diff

diff --git a/./index.ts b/./index.ts
index 651d7db..97fad55 100644
--- a/./fileA
+++ b/./fileB
@@ -1,7 +1,9 @@
 import fs from "fs";

-const matches = fs.readFileSync("football.csv", {
-  encoding: "utf-8",
-});
+const matches = fs
+  .readFileSync("football.csv", {
+    encoding: "utf-8",
+  })
+  .split("\n");

 console.log(matches);


```

- I'll go back over to my terminal.
- And now I should see that I have an array of strings where each string represents one match.

- So now we can map over this array, and for each string we'll split on comma.
- Okay.

-So going to remove that semicolon again.

- I'll do a map.

-And for every row that I expect to be a string.

-We are going to return a string.

- So I'm going to get on both those annotations.

So then inside the mapping statement I will return row dot split on comma like so.

Oops.

My typo right here.

- I said that we were going to return a string.
- I meant to say that we were going to return an array of strings like so.

- All right, so let's save this again.

```diff
diff --git a/./fileA b/./fileB
index 97fad55..cc1cc92 100644
--- a/./fileA
+++ b/./fileB
@@ -4,6 +4,9 @@ const matches = fs
   .readFileSync("football.csv", {
     encoding: "utf-8",
   })
-  .split("\n");
+  .split("\n")
+  .map((row: string): string[] => {
+    return row.split(",");
+  });

 console.log(matches);


```

- I'll flip on over to my terminal once more.
  -And there we go.

- This is looking better.

- So now we have an array of arrays.

- Each inner array represents one single match.

- And inside each of those inner arrays, we have the date home team as a team and so on.

Now you will notice that the home team goals and away team goals are numbers inside of strings.

If we wanted to somehow do some arithmetic on these strings right here, well, we would somehow have

to convert that into an actual number.

We'll probably do that at some point.

But for right now, I think this will work out just fine.

All right.

Let's take a quick pause right here.

When we come back, the next video, we're going to start to add in a little bit more code to actually

run an analysis on this data and then generate some kind of report.

- So I'll see you in just a minute.
