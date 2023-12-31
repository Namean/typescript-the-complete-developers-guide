In the last video we created an Interface Mappable


```ts
interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}
```

As long as another class has a 'location' property is can be an arugment to addMarker.

### Impact on CustomMap

Inside of CustomMap we no longer have any direct references to User, or Company

Meaning the two import statements at the top of the file can be deleted.


### Stand Alone CustomMap
We now have  astandalone CustomMap, class in fact if you want to show things in Google Maps, you can use the Mappable class to show markers.


We can remove company marker.


### Back Inside src/index.ts

- Refactor the following methods
    - customMap.addUserMarker -> customMap.addMarker(user);
    - customMap.addCompanyMarker -> customMap.addMarker(company);


### Behind the Scences

Notice how typeScript has no complaints about the two refactored lines of code.

Behind the scences when we try to pass user to addMarker TS is going to take a look at addMarker its going to see that the argument must be of type Mappable, behind the scneces, typescript is inspeting what type User is, and sees if User satisfies the Mappable interface.

TypeScript is going to look at our definition of what a 'user' is. 
sees, user has a location, that has a lat and lng. TypeScript has no problem because, User directly implements that interface. 


- Remove imports to User, and Company
- imports to User and Company found at top of src/CustomMap.ts
- Remove addCompanyMarker
