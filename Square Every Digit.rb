Instructions:

Welcome. In this kata, you are asked to square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer

Solution:

def square_digits num
  final_array = []
  num_array = num.to_s.split('')
  num_array.each do |digit|
    final_array.push(digit.to_i * digit.to_i)
  end
  final_array.join('').to_i
end
