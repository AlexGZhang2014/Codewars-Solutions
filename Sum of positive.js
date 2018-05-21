Instructions:

You get an array of numbers, return the sum of all of the positive ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: array may be empty, in this case return 0.

Solution:

function positiveSum(arr) {
  var array = arr.filter(x => x > 0).reduce((total, num) => total + num, 0);
  return array;
}
