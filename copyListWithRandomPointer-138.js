/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */



var copyRandomList = function (head) {
    const copy = new Map();

    // making copy of linked list in hashmap
    let current = head;
    while (current) {
        let node = new Node(current.val)
        copy.set(current, node);
        current = current.next
    }

    // setting node pointers in hashmap
    current = head;
    while (current) {
        copy.get(current).next = copy.get(current.next) || null;
        copy.get(current).random = copy.get(current.random) || null;
        current = current.next
    }
    return copy.get(head);
};

// Time complexity: O(N)
// Space complexity: O(1)
