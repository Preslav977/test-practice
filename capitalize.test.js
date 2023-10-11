const capitalize = require('./capitalize');

test('Return first word uppercase', () => {
  expect(capitalize('kek')).toBe('Kek');
});
