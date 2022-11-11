/**
 * @param {string} s
 * @return {boolean}
 */


// fn -> takes in string, converts to lowercase letters, removes non-alphanumeric chars, and checks if is palindrome
// string -> length >= 1, can contain special chars and spaces
// return boolean -> true/false


// turn string to lowercase
// initialize starting pointer, ending pointer
// while loop (starting pointer < ending pointer)
//      if string.charCodeAt(pointer) not in range of a number or lowercase letter, pointer++ / pointer--, continue
//      if string(pointer) !== string(pointer2) return false
//      otherwise increment/decrement both pointers
// return true


var isPalindrome = function (s) {
    s = s.toLowerCase()
    let starting = 0
    let ending = s.length - 1

    while (starting < ending) {
        const startingCode = s.charCodeAt(starting)
        const endingCode = s.charCodeAt(ending)

        if (!((startingCode >= 97 && startingCode <= 122) || (startingCode >= 48 && startingCode <= 57))) {
            starting++
            continue
        }

        if (!((endingCode >= 97 && endingCode <= 122) || (endingCode >= 48 && endingCode <= 57))) {
            ending--
            continue
        }

        if (startingCode !== endingCode) {
            return false
        }
        starting++
        ending--
    }
    return true
};

// Time complexity: O(N)
// Space complexity: O(N)