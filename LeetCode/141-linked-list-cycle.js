// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

// Example 1:

// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
// Example 2:

// Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
// Example 3:

// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.

// Constraints:

// The number of the nodes in the list is in the range [0, 104].
// -105 <= Node.val <= 105
// pos is -1 or a valid index in the linked-list.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// /**
//  * @param {ListNode} head
//  * @return {boolean}
//  */

//p: we are given a listnode object, pos is -1 or a valid index which is not a parameter.
//r: return true or false if there exists a cycle in the linked list. this is true if the tail's next pointer is another value in the list. pos is the index of that node.
//e: in the examples, the tail's next value is not null and is pointing to another node val.
//p: use a hash table to log all the nodes we've seen. if we've seen a node before, return true. keep running until we've seen a node before or run into the tail (next is null). space is o(n).
//  alternatively, use floyd's cycle finding algorithm where we employ two trackers, one slow and one fast (slow progresses one node at a time, fast progresses two nodes at a time.). if there is no cycle, the fast will end the search o(n), but if there is a cycle, it will be o(n+k) or simpley o(n) since fast will end up catching up with slow. space is o(1).
var hasCycle = function (head) {
  if (head == null) {
    return false;
  }

  let slow = head;
  let fast = head.next;

  while (slow !== fast) {
    if (fast == null || fast.next == null) {
      return false;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;

  // let seenStack = [];
  // while(head!==null){
  //     if(seenStack.includes(head)){
  //         return true;
  //     }
  //     seenStack.push(head);
  //     head = head.next;
  // }
  // return false;
};
