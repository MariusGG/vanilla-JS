
// Arrays allows you to store multiple values of data
// A collection of data types
// you store and array of of numbers, strings, and Objects
// we store arrays just like instagram stores an array of images or twitter being an array of tweets
// so when you post a new tweet, youare just adding to your post arrays
// Or when you delete an email, you are just removing from an array of objects

let numbers = [1, 2, 3, 4, 5]
let colours = ["blue", "orange", "green"]
let details = [{ firstName: "James", lastName: "Bond", occupation: "Spy"}, {firstName: "Homer", lastName:  "Simpson", occupation: "Nuclear safety inspector"}]

// we can call the first item of an arrays
number[0] //
console.log(details[1].occupation)
// we can add new values to an array by using the .push method which is bulit into javascript
colours.push("red")
console.log(colours)
// javascript will give access to methods to some data types...like numbers will ".toFixed()" and strings will have ".toUpperCase()"

// To remove a value from the array we can use the ".splice(a, b)" it has two arguments first is position and second how many items to remove from there
numbers.splice(0, 2)
console.log(numbers)
// We can also use it in an array of Objects
details[1].splice(1, 1)
