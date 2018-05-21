Instructions:

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.

The input string will only consist of lower case letters and/or spaces.

Solution:

function getCount(str) {
  let vowels = [];
  let array = ["a", "e", "i", "o", "u"];
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    let letter = str.charAt(i);
    if (array.indexOf(letter) !== -1) {
      vowels.push(letter);
    }
  }
  return vowels.length;
}
