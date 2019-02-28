
// looking at conditionals (if statements) TRUE AND FALSE
// like most shopping carts on some sites once you've addded to the basket it askes if you want to ckeckout
// or like conditions on a social media site if some accepts you then you can view their page


let items = 100

if (items > 50) {
  console.log("You have enough iteams for shipping")
}else {
  console.log("Sorry we can not so few items")
}

//the condition says once we add more then 50 items do this ELSE do something else
// you sometimes don't need the ELSE statement because if the condition is false do nothing
let basket = 0
if ( basket > 0 ) {
  console.log("would you like to checkout?")
}

//------------------------------------------------------------------
//------------------------------------------------------------------
//            JAVASCRIPT COMPARISON OPERATORS:
//    < "lessthan" >"graterthan" <= "lesstan or equal" >= "graterthan or equal"
//    == "equal to" != "not equal to"
//------------------------------------------------------------------
//------------------------------------------------------------------

// We could also not use a comparison operator in the condition
//
let balls = 10

if (ball) {
  console.log("you have something")
}
// this will work as 10 is equal to TRUE and 0 is FALSE

//------------------------------------------------------------------
//                TRUE and FALSE in js
//     TRUE: number 1+, strings, true
//     FALSE: "", false
//------------------------------------------------------------------


//------------------------------------------------------------------
//------------------------------------------------------------------
//    A WHILE condition
//------------------------------------------------------------------
//------------------------------------------------------------------

  let shoppingItem = 3

  while (shoppingItem <= 50) {
    console.log("This is shopping item" + shoppingItem)
    shoppingItem = shoppingItem +1
    // shoppingItem++ ( this a short hand for increamenting 1)
      // its exercutes the variable and add 1 until it hits 50
  }

  // A WHILE LOOP is a continues loop unit its condition is no long true, whis here would be when its equal to 50
  // its exercutes the body everything within the braces
