// A Functions in its purest form returns a value
// functions are call methods(in ruby)
// You can pass functions data through the parenthesis
// these data are also called arguments like so: (data)

function greet () {
  console.log("Hello");
}
// pass arguments in the parenthesis to make a function flexable
// like so function greet (i) { alert ("hello " + i)}

// call the function as so
greet()
//call function with argument
greet("Marius")

// you can pass many arguements as you like

function greet(name, age) {
  console.log("Hello " + name + " you are " + age + " years old."
}

great("Marius", 32)

function tripleMe (e) {
  return 3 * e
}

let threeTimesSomething = tripleMe("Marius")
console.log(threeTimesSomething);
