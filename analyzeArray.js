function analyzeArray(array) {
  const average = array.reduce((a, b) => a + b) / array.length;
  const min = Math.min(...array);
  const max = Math.max(...array);
  const { length } = array;

  const object = {
    average,
    min,
    max,
    length,
  };

  return object;
}

module.exports = analyzeArray;
