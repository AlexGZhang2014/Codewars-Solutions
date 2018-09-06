Instructions:

An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).
Note: anagrams are case insensitive
Complete the function to return true if the two arguments given are anagrams of theeach other; return false otherwise.

Examples:

"foefet" is an anagram of "toffee"
"Buckethead" is an anagram of "DeathCubeK"

Solution:

def is_anagram(test, original)
  test = test.downcase.chars.sort
  original = original.downcase.chars.sort
  test == original ? true : false
end
