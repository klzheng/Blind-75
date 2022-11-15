/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */


// two pointers
// set prev pointer to null
// set curr pointer to head
// while (curr) 
//      create a temporary variable to store the node's pointer - temp = curr.next
//      set the node pointer of curr to prev - curr.next = prev
//      move the prev pointer forward 1 node - prev = curr
//      move the curr pointer forward 1 node - curr = temp
// (once the loop is complete, the curr pointer is at null, and the prev pointer is now the head) 
// return prev


var reverseList = function (head) {
    let prev = null,
        curr = head

    while (curr) {
        temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
    }
    return prev
};

// Time complexity: O(N)
// Space complexity: O(1)



// recursive
// base case: if head is falsey return null
// Create a new node to call the function recursively on head.next
// Set head node as head.next.next
// set head's next = null
// Return the reversed linked list


var reverseList = function (head) {
    if (!head) return null

    var res = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return res;
};

// Time complexity: O(N)
// Space complexity: O(N)
