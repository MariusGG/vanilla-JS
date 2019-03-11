const fizzbuzz = require('./fizzbuzz');

// test('to return toBeUndefined', () => {
//   expect(fizzbuzz()).toBeUndefined();
// })

test('when given 1 return 1', () => {
  expect(fizzbuzz(1)).toEqual(1);
})

test('when given 3 return Fizz', () => {
  expect(fizzbuzz(3)).toEqual('Fizz')
})

test('when given 5 return Buzz', () => {
  expect(fizzbuzz(5)).toEqual('Buzz')
})

test('when number is divisible by 3 and 5 return fizzbuzz', () => {
  expect(fizzbuzz(15)).toEqual('FizzBuzz')
})
