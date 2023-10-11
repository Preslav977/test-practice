function capitalize(string) {
  const getFirstWord = string.slice(0, 1).toUpperCase();
  const getMoreWords = string.slice(1);
  const result = getFirstWord.concat(getMoreWords);
  return result;
}

module.exports = capitalize;
