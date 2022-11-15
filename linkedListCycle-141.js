/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */


// fn -> takes in a linked list and returns true/false depending on if the list has a cycle
// linked list -> values are only numbers, numbers can be positive/negative, length of linked list >= 0
// return boolean -> true/false


// [3,2,0,-4], pos = 1 -> true
// [1,2], pos = 0 -> true
// [1], pos = -1


// hashset
// while (head) is valid
//      if node is in hashset, if true, return true (we know that the nodes are repeating)
//      else (node is not in hashset), add node to set
//      head = head.next (move node forward)
// return false 


var hasCycle = function (head) {
    const set = new Set()
    let node = head

    while (node) {
        if (set.has(node)) return true
        else set.add(node)

        node = node.next
    }
    return false
};

// Time complexity: O(N)
// Space complexity: O(N)







// tortoise & hare algorithm
// two pointers - fast = head, slow = head
// while (fast && fast.next) [b/c fast is jumping nodes we have to make sure that the next node is valid as well]
//      fast = fast.next.next
//      slow = slow.next
//      if (fast === slow) return true [this conditional to be AFTER moving the fast and slow pointers]
// return false


var hasCycle = function (head) {
    let fast = head
    let slow = head

    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
        if (slow === fast) return true
    }
    return false
}

// Time complexity: O(N)
// Space complexity: O(1)