
//using object to create an obvious relation between variables, data and functions (method)
// objects makes things very easy to store
// think of them as containers which store functions and variables...ie data
// objects store data and that data is known as properties of that object.
// use a comma to seprate the properties
// objects are great to store data something
// and you can call each property of an object by call the dot notation  cat.name
// when a function lives within an object its called a method. as in the method of that object

// out side of the object to call a function you MUST always include "function"
// But within an Object the function keyword is omitted
let cat = {
  name: "Flex",
  age: 2,
  colour: "Black and White",
  food: {
    favourite: "Tuna"
    leastFavourite: "Dog food"
  },

  meow(){
    console.log("MEOW!!!!")
  }
}
// to find a property of and object:
cat.name
cat.colour
cat.meow()
//anthing to do with a cat lives within that Cat object

cat.food.favourite
// Also within cat object we can creat ojects like the food object
// This allows us to nest are data


//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
//      LOOKING AT BUILTIN BROWSER OBJECTS
//            AND WRITTING TO THE DOM
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------


  //here we are writing to the browser document
  // we are allways targetting this object to write to the browser
  document.addEventListerner("click", doSomething)
    //the first argument here is the event we are listerning for ("click", "scroll", "keydown")
    // the second argument is the event to exercute...(the function)
    // we are just passing the referrence to the function her and not exercuting..we let the eventListerner handle that

  function doSomething () {
    console.log("Hello You Clicked?")
  }
  //
