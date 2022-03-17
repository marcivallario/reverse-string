function reverseString(str) {
  let charArr = str.split('');
  let newCharArr = [];
  for (i = charArr.length-1; i >= 0; i--) {
    newCharArr.push(charArr[i])
  }
  let reversedString = newCharArr.join('')
  return reversedString
}

if (require.main === module) {
  console.log("Expecting: 'olleh'");
  console.log("=>", reverseString("hello"));

  console.log("");

  console.log("Expecting: 'dlrow'");
  console.log("=>", reverseString("world"));

  console.log("");

  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution

// split string into character array 
// initialize new empty array
// loop through character array backwards and add each character to the new array
// join new array into string
