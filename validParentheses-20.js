/**
 * @param {string} s
 * @return {boolean}
 */


// fn -> takes in string that contains only brackets and returns true/false if string is valid
// string -> length >= 1, only brackets, brackets can be nested
// return boolean -> true/false 


// initialize stack
// loop through the string
//      if the string has a opening bracket, if it does push the corresponding closing bracket to the stack
//      if string does not have opening bracket, check if string[i] === last item in stack, if true, remove last item in stack 
//      else return false (b/c we know that the char is not an opening bracket, and the char does not === last item in stack)
// return true if length of stack === 0, otherwise return false


var isValid = function (s) {
    const stack = []

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") stack.push(")")
        else if (s[i] === "{") stack.push("}")
        else if (s[i] === "[") stack.push("]")
        else if (s[i] === stack[stack.length - 1]) stack.pop()
        else return false
    }

    if (stack.length === 0) return true
    else return false
}

// Time complexity: O(N)
// Space complexity: O(N)