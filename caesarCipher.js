function caesarCipher(string, shift) {
  const asciiArray = [];
  const lettersArray = [];

  for (let i = 0; i < string.length; i += 1) {
    const asciiCode = string.charCodeAt(i);
    asciiArray.push(asciiCode);
  }

  for (let j = 0; j < asciiArray.length; j += 1) {
    const punctuation = asciiArray[j];
    if (
      punctuation === 32 ||
      punctuation === 33 ||
      punctuation === 44 ||
      punctuation === 63 ||
      punctuation === 46
    ) {
      const convertToPunctuation = String.fromCharCode(punctuation);
      lettersArray.push(convertToPunctuation);
    } else if (string.toLowerCase() === string) {
      const calculateAsciiCode = asciiArray[j] - 97;
      const calculateResultAndShift = calculateAsciiCode + shift;
      const findReminder = calculateResultAndShift % 26;
      const calculateAsciiResult = findReminder + 97;
      const convertToLetter = String.fromCharCode(calculateAsciiResult);
      lettersArray.push(convertToLetter);
    } else if (string.toUpperCase() === string) {
      const calculateAsciiCode = asciiArray[j] - 65;
      const calculateResultAndShift = calculateAsciiCode + shift;
      const findReminder = calculateResultAndShift % 26;
      const calculateAsciiResult = findReminder + 65;
      const convertToLetter = String.fromCharCode(calculateAsciiResult);
      lettersArray.push(convertToLetter);
    }
  }
  return lettersArray.join('');
}

module.exports = caesarCipher;
