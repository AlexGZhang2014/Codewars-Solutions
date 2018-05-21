Instructions:

Your task is to make two functions, max and min that take an array of integers list as input and outputs, respectively,
the largest and lowest number in that array.

#Examples
max([4,6,2,1,9,63,-134,566]) returns 566
min([-52, 56, 30, 29, -54, 0, -110]) returns -110
max([5]) returns 5
min([42, 54, 65, 87, 0]) returns 0

#Notes
You may consider that there will not be any empty arrays/vectors.

Solution:

var min = function(list){
    var num = list[0];
    for (var i = 1; i < list.length; i++) {
      if (list[i] < num) {
        num = list[i]
      }
    }
    return num;
}

var max = function(list){
    var num = list[0];
    for (var i = 1; i < list.length; i++) {
      if (list[i] > num) {
        num = list[i]
      }
    }
    return num;
}
