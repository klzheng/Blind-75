/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */


// recursive
// if list1 === null, return list2
// else if list2 === null, return list1
// 
// if list1.val < list2.val, list1.next = fn(list1.next, list2), return list1
// else list2.next = fn(list1, list2.next), return list2


var mergeTwoLists = function (list1, list2) {
    if (!list1) return list2
    else if (!list2) return list1

    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2)
        return list1
    } else {
        list2.next = mergeTwoLists(list1, list2.next)
        return list2
    }
};

// Time complexity: O(N)
// Space complexity: O(N)




// create dummy (empty) linked list
// create the tail
// while (list1 && list2 are both valid)
//      check if list1.val < list2.val
//          if true, set tail.next = list1, list1 = list1.next
//          else, set tail.next = list2, list2 = list2.next
//      update tail on each loop, tail = tail.next
// loop ends if either list1 OR list2 are null, so we have to check if the other list is null 
// check if list1 still has nodes, if so, tail.next = list1
// check if list2 still has nodes, if so, tail.next = list2
// return dummy.next (b/c when we created a new linked list, it initialized with a value of 0 so we want to get all the nodes after the 1st node)


var mergeTwoLists = function (list1, list2) {
    let dummy = new ListNode()
    let tail = dummy

    while (list1 && list2) {
        if (list1.val < list2.val) {
            tail.next = list1
            list1 = list1.next
        } else {
            tail.next = list2
            list2 = list2.next
        }
        tail = tail.next
    }
    if (list1) tail.next = list1
    if (list2) tail.next = list2

    return dummy.next
}

// Time complexity: O(N)
// Space complexity: O(1)