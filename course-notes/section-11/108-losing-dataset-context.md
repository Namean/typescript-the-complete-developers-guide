# TypeScript: The Complete Developer's Guide

## Section 11: Reusable Code

### Lesson 108. Losing Dataset Context

In this video.

We're going to start walking through our code base right here.

Really the single file as it is, stands.

And we're going to point out a couple of issues inside of here.

And like I said, we're going to refactor them one by one using some new typescript features.

So let's get to it.

All right.

So I got a diagram with a couple of different issues.

- Issues
  - Magic string compairsons
  - Source of data is hardcoded
  - Data array is all strings, even though it might have numbers in it
  - Variable named after a specific team
  - Analysis type is fixed
  - No ability to output the report in different formats

Like I said, we're going to go through these one by one.

The first thing we're going to consider is the magic string comparisons.

What do I mean by that?

Well, let's flip back over.

Notice how down here inside of our two if statements we have match at five equals H and match at five

equals a.

Now, you and I know because we just wrote out this code what those two comparisons are supposed to

be doing for us.

This is checking the case in which the home team won and this is checking the case in which the away team won.

The issue here is that if another engineer came and looked at our code or if you took a look at this
code at some point in time in the future, you would look at this comparison right here and say match
at five equals equals equals H.
What is the point of this?
Like, what are we checking for right here?
And so this code or this comparison is extremely unclear.
And I think it would be rather challenging for other engineers to take a look at this and understand
what we are trying to do.
So I think that we need to figure out some way of clarifying both these comparisons, preferably some
way that removes the hard coded H and the hard coded A, because other engineers will not understand
the significance of capital H or capital A unless they open up the football CSV file and understand,
okay, there's an H, A or D inside of here.

So to fix this up, we're going to go through a series of quick refactors.
I'm going to show you a couple of different ways that we might do this comparison.
And we're going to eventually settle on one way using a TypeScript feature that we have not yet seen.
So here's one possible way to fix up this code.
I could write above my statement define two new variables.
I could say something like Const home one or How about home when?
Is Capital H and const away win.
Is Capital A?
So I've now got two constants or two identifiers inside this file.
And now, rather than doing a comparison to strictly capital H, I could replace that with home win
and away win like so.

So now these two comparisons are much more clear to other engineers.

Someone else could look at this, see the comparison of Match five to Home Win, and I think would be

reasonable to say that other people would understand.

Okay.

We're checking to see if there was a home win or an away win.

So I think this is definitely an improvement.

There's just one issue here.

Remember in that match five column, so like this column right here, there are three possible values.

You can have h a indicating a way and most importantly, D indicating a draw or a tie between the two

teams.

So the issue here right now is that we've encoded some information about our data set into our code.

If another engineer looked at these two options right here, they might be thinking, okay, the only

possible outcome from a game is a home win or an away win.

And we did not communicate to other engineers that there is a third possibility, which is a draw that

actually could be really important for other engineers.

Right now, you and I are running some very specific analysis, but if we ever decided to update our

code and indicate the possibility of like, you know, how many draws there are per season or something

like that, we would have to know that well, I draw as a possibility and to find a draw match at five

would be equal to Capital D.

So right now, this approach is not that great because it really just doesn't indicate the entire set

of values that match at five can be.

So I think that one possible way to fix this up would be to just simply add in a new identifier here

and say something like Draw is going to be capital D like so.

So now other engineers can look at this right here and understand, okay, maybe there are three possible
outcomes a home win and a way win or a draw.
So this is definitely an improvement.
But yet again, there's another issue.

### Another Issue

Notice how inside of my editor the variable draw gets faded out.

That's because I declared that variable, but I never actually used it inside this file.

So let me tell you exactly what would happen if another engineer came and looked at this code.

They would see this and say, Oh, the variable draw is unused.

Well, if it's not used, I'm just going to delete it like so.

So because we don't use that variable inside of our analysis, it is incredibly likely, in my personal

opinion, that another engineer would come along, delete that variable.

And once again we have lost information about our data set.

We no longer know that there are three possible outcomes from a match.

Now we think there are only two, or at least that's what our code seems to indicate.

So clearly this topic is a little bit more nuanced than you might think.

So let's take a quick pause right here.

When we come back, the next video, we're going to start looking at a solution to kind of fix this up.

So quick break and I'll see you in just a minute.

### Summary

Communicating to other engineers our dataset
