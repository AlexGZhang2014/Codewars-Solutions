Instructions:

Complete the solution so that it reverses the string value passed into it.

solution('world'); // returns 'dlrow'

Solution:

function solution(str){
  var array = str.split('');
  return array.reverse().join('');
}
