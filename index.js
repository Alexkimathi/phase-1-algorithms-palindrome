function isPalindrome(word) {
  // Write your algorithm here
  const arrayValues = word.split('')

  const reverseArray = arrayValues.reverse()
  const reverseString = reverseArray.join('')

  return word === reverseString? true : false;

  // if (word == reverseString){
  //   console.log('its a palindrome')
  // }else{
  //   console.log('its Not a palindrome')

  // }
}

// const string = ('mom');

// isPalindrome(string);

/* 
  Add your pseudocode here
*/
// define a function that takes a string as argument
    // use a split method on the string
    // reverse the new array after 
    // use the join method to convert array to string
    // compare the reversed string and the original string
    // return true if they match and false if the dont
/*
  Add written explanation of your solution here

   The split('') method converts the string into individual array characters.
   The reverse() method reverses the position in an array.
   The join('') method joins all the elements of an array into a string

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;




