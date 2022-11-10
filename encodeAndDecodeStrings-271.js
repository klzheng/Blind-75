/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */


// fn -> encodes string and returns encoded string
// strs -> can contain any valid characters inclusive of numbers, special chars, etc
// return encoded string -> 1 string

// perform .join() string method with .fromCharCode() method

var encode = function(strs) {
    return strs.join(String.fromCharCode(1))
};





/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */

// fn -> takes in encoded string and returns array of words
// string -> any valid ASCII char
// return arr -> should be equal to array before encoding

// perform .split() method with .fromCharCode() method

var decode = function(s) {
    return s.split(String.fromCharCode(1))
};


// Time complexity: O(N)
// Space complexity: O(1)