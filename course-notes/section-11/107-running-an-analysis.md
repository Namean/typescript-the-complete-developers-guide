# TypeScript: The Complete Developer's Guide

## Section 11: Reusable Code

### Lesson 107. Running an Analysis

Now that we've parsed our data into a more usable data structure, we're going to start thinking about

running some kind of analysis on this data.

So for our first analysis, we'll do something nice and easy.

I'm going to pull up my football CSV file.

Here it is right here.

You'll notice that in the very first row there is a team called Man United, which is short for Manchester

United.

- For our first analysis, let's just try to count out the number of times that Man United has won a game.

In order to figure out how often Manchester United has won a game.

We want to find every match where Manchester United is.

The Home Team and the home team one.

Remember that second to last column right there has an H and A or a D h indicates a home win a indicates

in a win.

So we'll find whenever Man United is the home team and the home team wins or whenever Manchester United

is the away team and the Away team wins.

All right.

So to do that, I'll flip back over to my index file.

Down at the bottom.

I'm going to remove the console log and I'm going to replace it with a variable declaration.

I'm going to call Man United Wins and I'll initialize it to zero like so.

So every time we have found that Man United has won a game, we'll just increment this by one.

Now to iterate through our collection of matches, I'll put together a four of loop, so I'll say four

let match of matches.

This is a four of loop from S 2015.

This is not something specific to TypeScript.

We're just going to iterate over all the different matches inside that matches array.

So match is going to be an array of strings and it's going to essentially represent one single row.

Just to make sure that the structure of this row is really clear.

I took that first row and put some diagrams on each of those different indices.

So our date is going to be at index zero.

The home team will be at index one and then home or away will be at index five.

So once again, we want to find whenever Man United was the home team and the home team won or when

Man United was the Away team and the Away team won.

So to do so.

We can write out two simple if statements.

We'll say if match at one is equal to man united.

And match at five is H.

Then that means that Manchester United won as the home team and we should increment man.

United wins like so.

Else if match at one or excuse me, match at two.

Is Man United.

And match at five is away.

Then that means that Manchester United won as the away team.

So once again, we should do man.

United wins.

Plus, plus.

All right.

So pretty simple analysis here.

Nothing too crazy.

And so now our last step will be to.

Generate a report.

A report this time around will be very simple and straightforward.

We're just going to console.log out this total and find that total inside of our terminal.

That's pretty much it.

So for our reporting step at the very bottom, I'll do a console log of a template string.

So notice the back ticks on here and I'll say, Man, united one.

Man.

United wins games.

So.

Okay.

So this looks pretty good.

Let's save the file.

I'll flip back over to my terminal, and I can see that Manchester United won 18 games.

All right.

So that's pretty much one entire iteration of our program.

So we've now loaded up our data, parsed it, analyzed it, and then generated some report.

So this right here concludes the end of our bad code.

I remember we were going to first build the application with kind of a JavaScript style approach.

So taking a look at this code, there's nothing in here that necessarily looks that bad.

I think that everything inside of here, you know, it's not the worst thing in the world.

You can read this somewhat easily.

It all fits into a single file.

But, you know, maybe there's a couple locations where we might be able to improve our code quality

just a little bit by using some typescript.

So let's take a quick pause right here.

We'll come back to the next video and we're going to start highlighting some issues with our current

application.
