/**
 * @param {string[]} tokens
 * @return {number}
 */


// fn -> evaluate math expression in reverse polish notation and return an integer
// expression -> array of values, can include +-*/, length >= 1
// return value -> number, always valid result


// ["2","1","+","3","*"] -> 9
// ["4","13","5","/","+"] -> 6
// ["10","6","9","3","+","-11","*","/","*","17","+","5","+"] -> 22
// operator is applied to the two numbers before it


// initialize stack
// loop through expression array
//      if element is operator, perform operation on top 2 numbers and replace 2nd highest number with result, .pop() top number
//      else element has to be integer, just .push() element onto stack
// return top value of stack


var evalRPN = function (tokens) {
    const stack = []

    for (let i = 0; i < tokens.length; i++) {
        const size = stack.length
        if (tokens[i] === "+") {
            stack[size - 2] = stack[size - 2] + stack[size - 1]
            stack.pop()
        } else if (tokens[i] === "-") {
            stack[size - 2] = stack[size - 2] - stack[size - 1]
            stack.pop()
        } else if (tokens[i] === "*") {
            stack[size - 2] = stack[size - 2] * stack[size - 1]
            stack.pop()
        } else if (tokens[i] === "/") {
            stack[size - 2] = Math.trunc(stack[size - 2] / stack[size - 1])
            stack.pop()
        } else stack.push(Number(tokens[i]))
    }

    return stack[0]
};

// Time complexity: O(N)
// Space complexity: O(N)