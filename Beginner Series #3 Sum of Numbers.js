Instructions:

Given two integers a and b, which can be positive or negative, find the sum of all the numbers between them (inclusive) and return it.
If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples
GetSum(1, 0) == 1   // 1 + 0 = 1
GetSum(1, 2) == 3   // 1 + 2 = 3
GetSum(0, 1) == 1   // 0 + 1 = 1
GetSum(1, 1) == 1   // 1 Since both are same
GetSum(-1, 0) == -1 // -1 + 0 = -1
GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

Solution:

function GetSum(a, b) {
  var count = 0;
  if (a < b) {
    while (a <= b) {
      count += a;
      a++;
    }
  }
  else if (a === b) {
    return a;
  }
  else {
    while (b <= a) {
      count += b;
      b++;
    }
  }
  return count;
}
