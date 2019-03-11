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
