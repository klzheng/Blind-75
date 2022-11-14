/**
 * @param {number} n
 * @return {string[]}
 */


// fn -> takes in an integer, n and returns an array of all valid combinations of n pairs of opening/closing parentheses
// integer, n -> only number, n >= 1, n <= 8
// return array -> consists of only opening/closing parentheses, each item should be strings, each item same length


// 3 -> ["((()))","(()())","(())()","()(())","()()()"]
// 1 -> ["()"]


// stack, recursion
// initialize stack
// initialize result arr
// recursive function that takes in opening/closing parentheses number
//      base case: opening === closing && closing === n
//      if (opening < n) add "(" to stack, call recursive_fn(opening + 1, closing), pop() item from stack when its done
//      if (closing < opening) add ")" to stack, call recursive(opening, closing + 1), pop()
// call recursive function with starting number of opening/closing parentheses -> (0, 0)
// return result arr


var generateParenthesis = function (n) {
    const stack = []
    const result = []

    const backtrack = (opening, closing) => {
        if (opening === closing && closing === n) {
            result.push(stack.join(""))
        }

        if (opening < n) {
            stack.push("(")
            backtrack(opening + 1, closing)
            stack.pop()
        }

        if (closing < opening) {
            stack.push(")")
            backtrack(opening, closing + 1)
            stack.pop()
        }
    }
    backtrack(0, 0)
    return result
};

// Time complexity: O(2^2n)
// Space complexity: O(2^2n)