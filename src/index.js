module.exports = function check(str, bracketsConfig) {
  bracketsArray = [].concat.apply([], bracketsConfig);
  openingBrackets = bracketsArray.filter((value, index, Arr) => index % 2 === 0);
  closingBrackets = bracketsArray.filter((value, index, Arr) => index % 2 !== 0);

  if (str.length % 2 > 0)
    return false;

  currentChar = '';
  expectedBracket = '';
  temp = [];

  for (i = 0; i < str.length; i++) {
    currentChar = str[i];

    if (openingBrackets.indexOf(currentChar) > -1 && closingBrackets.indexOf(currentChar) > -1) {
      lastChar = temp[(temp.length - 1)];
      if (lastChar === str[i]) {
        temp.pop(currentChar);
      } else {
        temp.push(currentChar);
      }
    } else if (openingBrackets.indexOf(currentChar) > -1) {
      temp.push(currentChar);
    } else if (closingBrackets.indexOf(currentChar) > -1) {

      expectedBracket = openingBrackets[closingBrackets.indexOf(currentChar)];
      if (temp.length === 0 || (temp.pop() !== expectedBracket)) {
        return false;
      }

    } else {
      continue;
    }
  }

  return (temp.length === 0);
};
