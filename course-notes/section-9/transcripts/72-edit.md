### Recap

We've now seen several differnt ways of putting together adMarker in a bad fashion.

So in this video, we're going to focus on the best solution.

### Reminder - Issue with Current Approach

- CustomMap has direct dependency on all the different classes inside of our application that we might want to show on the map.
- If we had additional classes, CustomMap would depend on those as well

### Fixing the issue via Inverting Dependency

To fix this issue, we're going to inver this dependency. Its like saying "Hey, class User, if you wnat to work with Map a map, it is up to you to satisfy the maps, requirements.

## Adding some Configuration - Navigate to CustomMap.ts -

- Satisyging the interface
- Kf you want to be an argument to addMarker, here's what you have to do
- You must have a location property, that is an object
- that object must have a latittude, and a longitude, that is a number

```ts
const location = {
  lat: number,
  lng: number,
};
```

As long as you have location with Latitude, and Longitude, then you are eligible to be added as an argument to addMarker.

### Putting together the directions - Making use of Interfaces

- Interfaces behave as a gatekeeper of sorts to a method.
- We're going to create an interface that defines what it means to be mappable
