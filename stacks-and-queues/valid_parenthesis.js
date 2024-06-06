/**
 * @param {string} s
 * @return {boolean}
 */

/**
 * 1. The first line of the function uses a guard statement to check if the length of the input string is even. If the length is odd, the function returns false because it means that the brackets are not properly balanced.
 * 2. The next line creates an empty stack of characters to store the opening brackets.
 * 3. The function then loops through each character item in the input string s.
 * 4. For each character item, the code checks whether it is an opening bracket: (, [, or {. If it is, the corresponding closing bracket is pushed onto the stack. For example, if the character is (, the character ) is pushed onto the stack.
 * 4.1 If the character is a closing bracket: ), ], or }, the code checks whether the stack is empty. If the stack is empty, it means that there is no opening bracket to match the closing bracket, so the function returns false.
 * 4.2 If the stack is not empty, the last opening bracket is removed from the stack and checked against the current closing bracket. If the brackets do not match, the function returns false.
 * 5. After looping through all the characters in the input string, the function checks whether the stack is empty.
 * 5.1 If it is, it means that all the opening brackets have been matched with their corresponding closing brackets, so the function returns true.
 * 5.2 If the stack is not empty, it means that there are unmatched opening brackets, so the function returns false.
 */
var isValid = function (s) {
  let stack = []; // create an empty stack to store opening brackets
  for (let c of s) {
    // loop through each character in the string
    if (c === "(" || c === "{" || c === "[") {
      // if the character is an opening bracket
      stack.push(c); // push it onto the stack
    } else {
      // if the character is a closing bracket
      if (
        !stack.length || // if the stack is empty or
        (c === ")" && stack[stack.length - 1] !== "(") || // the closing bracket doesn't match the corresponding opening bracket at the top of the stack
        (c === "}" && stack[stack.length - 1] !== "{") ||
        (c === "]" && stack[stack.length - 1] !== "[")
      ) {
        return false; // the string is not valid, so return false
      }
      stack.pop(); // otherwise, pop the opening bracket from the stack
    }
  }
  return !stack.length; // if the stack is empty, all opening brackets have been matched with their corresponding closing brackets,
  // so the string is valid, otherwise, there are unmatched opening brackets, so return false
};
