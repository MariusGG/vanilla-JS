/*
    Returning and mutating a value
*/

let myCars = [
  {name: "4seriers", colour: "Red", speed: 80},
  {name: "Bugatti", colour: "Black", speed: 1000},
  {name: "Corsa", colour: "Silver", speed: 50}

]

// MUTATING is changing or modifying data and we can mutate the data above by using the .push method
// its good to understand the difference between mutating and returning data,
// As mutating data is what you be doing mostly before returning it
myCars.push({name: "Wagon", colour: "brown", speed: 10})

console.log(myCars)
myCars.push({name: "Farari", colour: "yellow", speed: 100})

// The .push method will also return  a value of 4 which is the number of items within the array
// in order to see the value you'd needed to console.log the "myCars.push({name: "Wagon", colour: "brown", speed: 10})"
// so the pushn method mutats the array and also returns a value


/*
      Some ARRAY methods that do  not mutat or return a value
      ARRAY method which do not mutate the array but return a value are:

                          .map() and .filter()
*/


// the .map method allows us to return individual bits of data from the ARRAY
// lets get just the names of the myAnimals:


let myAnimals = [
  {species: "Lion", food: "meat", age: 10},
  {species: "Puppy", food: "dog food", age: 2},
  {species: "Shark", food: "meat", age: 7},
  {species: "Turtle", food: "green stuff", age: 90}


]
// EVERY ARRAY IN JS HAS ACCESS TO .map AND .filter methods

// .map will only return back data so if we map the array we should get 4 as there are items withing the array
// .map is also to create an new ARRAY which is bassed on another array, so you have two different array data types
// .map WILL NOT! mutate or change the array which its called on but simply RETURNS a new vaule

myAnimals.map(getSpecies)
//since the above loop is'nt stored the data is just in thin air
// best to store are new array of data
let animalNames = myAnimals.map(getSpecies)
// here the .map is passing are function the current item its looping through so we can do something with that data
// it will loop through each one of the items individually
function getSpecies(x) {

  return x.species
  // here we are saying, when you get to an item in the array go to it's .species property and return it
}

console.log(animalNames)

// what .map does is loop through each item in the array and RETURNS the data value
// And you target specific properties by using the do notation as I've done with .species
// the mape method will call the "getSpecies" method for each item within the array (  4 times )

// .filter is very similar to .map as it DOES NOT change or mutate the array, it returns a new array and is a higher-order function
// Just like .map it will loop through each item in the array and we can return something from there
// BUT! filter doesn't say whats going to get added to the new array but uses a TRUE or FALSE value
// so we can pass in a true of false condition to return something
let younAnimals = myAnimals.filter(ageBelowTen)

function ageBelowTen(x) {
  // x here represents the 1st item in the array
  return x.age < 10
  // here its a condition saying return only x items with age less than 10 and they will be added to the new array
  // we could also say x.food == "meat" for animals that only eat meat and they will be added to the new array
}

function onlyMeatEaters(e) {
  return e.food == "meat"
}

console.log(onlyMeatEaters)

let youngMeatEater = myAnimals.filter(ageBelowTen).filter(onlyMeatEaters).map(getSpecies)

console.log(youngMeatEater)

// ARRAYS are great because once its stored as an array you can keep call more array  methods on them to filter and map to return a value
// Its super import to understand all arrays have access to the same methods again and again
// REMEMBER .map and .filter don't mutate arrays but they are super powerful on their own...
// BUT! togther once you chain them you can create powerful codes

// CHAINNING code like .map().filter isn't just limted to arrays we can do so with any data types in JS
