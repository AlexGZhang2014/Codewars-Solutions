Instructions:

Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Solution:

def find_it(seq)
  seq.each do |num|
    if seq.count(num) % 2 == 1
      return num
    end
  end
end
