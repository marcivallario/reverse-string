def reverse_string(str)
  reversed = ""
  i = str.length - 1
  while i >= 0 do 
    reversed = reversed + str[i]
    i = i-1
    reversed
  end
  return reversed
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 'ih'"
  puts "=>", reverse_string('hi')

  puts

  puts "Expecting: 'ybabtac'"
  puts "=>", reverse_string('catbaby')

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution

# split string into character array 
# initialize new empty array
# loop through character array backwards and add each character to the new array
# join new array into string