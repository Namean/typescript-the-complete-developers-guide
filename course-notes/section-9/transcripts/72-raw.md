### Recap

We've now seen several different ways of putting together ad marker in a bad fashion.

So in this video, we're going to focus on the correct solution or maybe not the correct solution.

Maybe the best solution.

All right.

So let's get to it.

### Reminder - Issue with Current Approach

Just a quick reminder here right now, the issue with our current approach is that custom map has a

direct dependency on all the different classes inside of our application that we might want to show

on the map.

So custom map depends upon user, it depends upon company.

And if we ever had like a car lot or a park or anything else, custom map would depend upon them as

well.

So to fix this issue, we're going to invert this dependency, so to speak, rather than custom map.

Depending upon all these different classes, we're going to say, Hey, class user, if you want to

work with a map, it is up to you to satisfy the maps, requirements and company.

If you want to show up on the map, you have to satisfy the maps requirements.

So how are we going to invert that dependency?

### Adding some Configuration - Navigate to CustomMap.ts

Well, here's what we're going to do at the top of the custom map file.

We're going to add in a little bit of configuration.

And this configuration up there is essentially going to be some instructions on how a object can be

an argument to the add marker function.

So at the very top of that file, we're going to say, hey, every other class inside of our application,

every other class, if you want to be shown on the map, or in other words, if you want to be a argument

to add marker, here's what you have to do.

So inside those directions, we're going to say to show up on the map, you have to have a location,

property.

Remember, that's the key.

You have to have a location property that is an object.

And that object has to have a latitude that is a number and a longitude.

That is a number.

Every other class.

As long as you have location with Latitidude longitude, then you are eligible to be added as an argument to add

marker.

So how are we going to put together those directions?

Well, we're going to make use of interfaces.

Remember, we spoke about interfaces a couple of videos ago and we looked at a diagram very similar

to this.

We spoke about how we can use an interface to kind of behave as like a gatekeeper of sorts to a method.

So we're going to create an interface that defines what it means to be malleable.

We're going to define in this interface a set of instructions to all the other classes inside of our

application that tell all those other classes how they can be eligible to be an argument to add marker.

So then it's going to be up to all of those other classes to opt in to being malleable, and they can

be so by having that location property with the latitude and longitude that our numbers.

So that's how we're going to kind of invert this dependency rather than saying, oh, our add mark or

method has to accommodate a user and a company and a park and so on.

Instead, user has to choose to fulfill the interface or satisfy the interface by having the correct

properties with the correct names in the correct types.

If a user does that, then user has qualified to be an argument to add marker.

All right.

So this is like one of the prime best examples I can show you of interfaces.

And once again, like I've said a billion times, we're going to see this relationship right here in

every application we're going to work on.

So let's try putting together an implementation right now and see what it looks like.

### Defining the Interface - Mappable

So to get started, I'm going to flip back over to my editor and at the top of custom map, I'm going

to define an interface called Mappable.

So this right here is going to be our instructions to every other class on how they can be an argument.
To add marker.

        If an object wants to be mappable
            - satisy the properties we listed here
            - location

So every other class can look at this interface and say, Oh, if I want to be mappable.
I want to be an argument to add marker.
And if they want to.

All they have to do is satisfy the properties we listed here.

So to be map able to be an argument, to add marker, you have to have a location property that is an

object and that object has to have a latitude property that is a number and a lag or longitude that

is a number as well.

If another class or just any other object inside of our application has a location that is the latitude

and longitude, they can be an argument to add marker.

So to make sure that's actually the case, last thing we have to do is go back down to add marker and

we're going to change the type on here.

We're going to say it to be an argument.

To add marker, you have to satisfy the malleable interface that we just created.

Like so.

Okay.

So that's it.

That's the idea.

So now we have an add marker function that can take any argument so long as it satisfies interface.

So now if we start to add in like a class for park or car lots or grocery store or dentist or whatever

it is hospital.

As long as they satisfy this interface right here, they can be an argument to add marker.

One thing I want to throw out there really quickly, because we didn't super closely discuss this when

we were talking about interfaces, is that a single value inside of TypeScript can have multiple different

types?

So even though we're talking about having like users right here in company, an instance of a user has

type user, but it can also fulfill the interface tappable and if it fulfills that interface, then

user can also be of type TAPPABLE.

So a single value can technically have multiple different types.

I just want to clarify that really quickly.

All right.

So let's take another quick pause right here.

We're going to come back the next video and fix up the rest of our code to make sure that we can pass

in a user and a company to this method.

So I'll see you in just a minute.
