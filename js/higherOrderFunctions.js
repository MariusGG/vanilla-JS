// A HIGHER ORDER FUNCTION is a Function that either:
//  - (A) accepts a function as an arguument
// - (B) Returns a FUNCTION

// Function that exercutes a FUNCTION

document.addEventListern('click', doSomethingFunction);
// this is an example of a higher order function happening
// the addEventListern is take doSomethingFunction as an argument because in some programing languages you can't do this

// in JS functions arent an exclusive bit of data and can only be used in a certain way....BUT its just another value in JS

function doSomethingFunction() {
  console.log("I am a function being passed as a argument")
}

// A function that returns a functions

function doubleThis(e) {
  return e * 2
}
// this is not a higer order function because it does not take a function as an  argument and it does not return a function

// it would be usefuk to return a function within a function to stop repition of something like this:

function tripleThis(e) {
  return e * 3
}
function quadrupleThis(e) {
  return e * 4
}
// As nothing is really changing other then the times is multiplied we can create a function within a function which can handle this

function multiplierThis(multiply) {
  return fucntion(e) {
    return e * multiply
  }
}
/*
what is happening now is we create our higher level "multiplierThis" which will allow us to set how we multiply by
and within that we have a function which allows us to set what we are multiplying
So this is a real higher order function structure now with one lower tier

*/
let multiplyTwos = multiplierThis(2)
let multiplyThrees = multiplierThis(3)
let multiplyfours = multiplierThis(4)
// SO in javascript we can asign a function to a variable like above
// we are asigning a variables a function which will call another function within
// so when I pass my new variable an argument I'm calling it on my function within

multiplyTwos(2)
multiplyThrees(3)
multiplyfours(4)
//here I'm passing 2, 3 and 4 to the lower level function

/*----------------------------------------------------

          ARRAY HIGHER ORDER FUNCTIONS
*///--------------------------------------------------


let colours = ["red", "green", "blue"]

colours.forEach(doSomethingToEach)
// we are iterating through each of the items in the array and doing something to them by passing the "doSomethingToEach" function

function doSomethingToEach(itemFromArray) {
  console.log(itemFromArray + " is my favourite colour.")
}
//this function which gets called to are array will add a string to each item from the Arrays
// The "itemFromArray" will be each item from the array
// this code will run untille all items are passed the function doSomethingToEach
// this is great because when we add a new item it will also get given the message " is my favourite colour."
// this is similar to when you get a new email it gets passed the unread function and keeps it highlighted until read.

//  OTHER HIGHER ORDER FUNCTIONS FOR ARRAYS ARE

colours.map()
colours.filter()
