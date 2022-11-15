/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


// fn -> adds the values of the nodes in the two linked lists and return the sum as a linked list
// l1, l2 -> linked lists, never empty, values >= 0, values <= 9, digits are in reverse order
// return sum -> linked list, also in reverse order


// [2,4,3], [5,6,4] -> [7,0,8]
// [0], [0] -> [0]
// [9,9,9,9,9,9,9], [9,9,9,9] -> [8,9,9,9,0,0,0,1]


// elementary addition with carry
// create a new linked list (this is going to be our return value)
// create carry variable
// while (l1 OR l2 OR carry) [either 3 of those values are not null]
//      if (l1) let v1 = l1.value, else v1 = 0
//      if (l2) let v2 = l2.value, else v2 = 0
// 
//      calculate value by adding up v1, v2, carry
//      recalculate carry - Math.floor(value / 10)
//      recalculate value - value % 10
// 
//      create new linked list with value
//      add node to our linked list - current.next = new linked list
//      move current up one node - current = current.next
// 
//      move up l1 node - if (l1) let l1 = l1.next, else l1 = null
//      move up l2 node - if (l2) let l2 = l2.next, else l2 = null
// return dummy.next (remember, linked lists have a node value of 0 as default so we have to skip over the first value)


var addTwoNumbers = function (l1, l2) {
    const dummy = new ListNode()
    let current = dummy

    let carry = 0
    while (l1 || l2 || carry) {
        let v1 = l1 ? l1.val : 0
        let v2 = l2 ? l2.val : 0

        let value = v1 + v2 + carry
        carry = Math.floor(value / 10)
        value = value % 10

        current.next = new ListNode(value)
        current = current.next

        l1 = l1 ? l1.next : null
        l2 = l2 ? l2.next : null
    }
    return dummy.next
};

// Time complexity: O(N)
// Space complexity: O(N)











