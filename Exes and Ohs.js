Instructions:

Check to see if a string has the same amount of 'x's and 'o's.
The method must return a boolean and be case insensitive.
The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

Solution:

function XO(str) {
  var array = str.toLowerCase().split('');
  var xx = [];
  var oo = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] == "x") {
      xx.push(array[i]);
    }
    else if (array[i] == "o") {
      oo.push(array[i])
    }
  }
  if (xx.length == oo.length) {
    return true;
  }
  else {
    return false;
  }
}
