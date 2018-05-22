Instructions:

Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.

Solution:

function findLongest(array){
  let max = Math.max(...array);
  for (let num in array) {
    if (array[num].toString().length == max.toString().length) {
      return array[num];
    }
  }
}
