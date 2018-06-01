Instructions:

After calling the function findSum() with any number of non-negative integer arguments, it should return the sum of all those arguments.
If no arguments are given, the function should return 0, if negative arguments are given, it should return -1.

Examples:
findSum(1,2,3,4); // returns 10 
findSum(1,-2);    // returns -1 
findSum();        // returns 0

Hint: research the arguments object on google or read Chapter 4 from Eloquent Javascript

Solution:

function findSum(a, b, c){
  const args = Array.from(arguments)
  if (args.length == 0) {
    return 0
  }
  else if (Math.min(...args) < 0) {
    return -1
  }
  else {
    return args.reduce((a, b) => a + b)
  }
}