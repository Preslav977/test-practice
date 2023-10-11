const analyzeArray = require('./analyzeArray');

test('Expect object with following properties, average, min, max, length', () => {
  const object = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(object).toHaveProperty('average', 4);
  expect(object).toHaveProperty('min', 1);
  expect(object).toHaveProperty('max', 8);
  expect(object).toHaveProperty('length', 6);
});
