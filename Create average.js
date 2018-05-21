Instructions:

Write function avg which calculates average of numbers in given list.

Solution:

function find_average(array) {
  var sum = array.reduce((total, num) => total + num);
  return sum / array.length;
}
