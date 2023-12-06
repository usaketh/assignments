/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }

  let i = 0, j = str.length - 1;
  str = str.toLowerCase();

  while (i <= j) {
    if (!isAlphanumeric(str[i])) {
      i += 1;
      continue;
    }

    if (!isAlphanumeric(str[j])) {
      j -= 1;
      continue;
    }

    if (str[i] !== str[j]) {
      return false;
    }

    i += 1;
    j -= 1;
  }

  return true;
}

function isAlphanumeric(char) {
  return /[a-z0-9]/.test(char);
}

module.exports = isPalindrome;
