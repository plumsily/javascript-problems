// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Example 2:

// Input: head = [1,2]
// Output: [2,1]
// Example 3:

// Input: head = []
// Output: []

// Constraints:

// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000
// Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?

// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */

//p: we are given a linked list object, listnode, where the properties include the node's value and the next pointer. the head is the first node.
//r: we must return a listnode that has a flipped order.
//e: in the above examples, we see that the head and tail have switched, and all the pointers have been switched to the opposite node.
//p: we can reverse it by using either iteration or recursion. in order to reverse the linked list, we must store the previous elements while keeping the current pointer available. as we traverse the list, we store the current next pointer into a temp variable, tempNext. then we redirect the head.next as the previous node, which is set afterwards as the current node. then we continue traversing using the tempNext to point in the correct direction. we loop thru until the current head is null, or at the last node. when the loop ends, the remaining listnode is prev, which is returned.
var reverseList = function (head) {
  let prev = null;
  let curr = head;
  while (curr != null) {
    tempNext = curr.next;
    curr.next = prev;
    prev = curr;
    curr = tempNext;
  }
  return prev;

  //   // Special case...
  //   if (head == null || head.next == null) return head;
  //   // Create a new node to call the function recursively and we get the reverse linked list...
  //   var res = reverseList(head.next);
  //   // Set head node as head.next.next...
  //   head.next.next = head;
  //   //set head's next to be null...
  //   head.next = null;
  //   return res;     // Return the reverse linked list...
};
