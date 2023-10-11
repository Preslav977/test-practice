const caesarCipher = require('./caesarCipher');

test('When last alphabet is reached, should wrap to A', () => {
  expect(caesarCipher('z', 1)).toBe('a');
});

test('The cipher should include punctuation', () => {
  expect(caesarCipher('hello!', 1)).toBe('ifmmp!');
});

test('Testing caesar cipher functions functionality', () => {
  expect(caesarCipher('is this working.', 1)).toBe('jt uijt xpsljoh.');
});
