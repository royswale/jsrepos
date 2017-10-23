/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
	this.val = val;
	this.next = null;
}


/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

    return arrayToList( addArray( listToArray(l1), listToArray(l2) ) );

};





var l1 = arrayToList([7,2,4,3]);
var l2 = arrayToList([5,6,4]);
console.log( addTwoNumbers(l1, l2) );

// [2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,9]
// [5,6,4,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,9,9,9,9]


/**
 * convert singly-linked list of ListNode to array of nodes' value
 *
 * @param ListNode
 *
 * @return array
 *
 */
 function listToArray(list) {
    var a = [];

    do {
        a.push(list.val);
        list = list.next;
    } while ( list );

    return a;
 }


/**
 * convert array to singly-linked list of ListNode
 *
 * @param array
 *
 * @return ListNode
 *
 */
function arrayToList(array) {
    var list = new ListNode(0); // dummy head
    var listNext = list;// pointer

    for (var i = 0; i < array.length; i++) {
        var node = new ListNode( array[i] );
        listNext.next = node;
        listNext = node;
    }

    return list.next;
}


/**
 * add to array with the most significant digit in the left
 *
 * @param array
 * @param array
 *
 * @return array
 *
 */
function addArray(a, b) {
    a.reverse();
    b.reverse();

    var c = [];
    var carry = 0;

    var length = Math.max(a.length, b.length);

    for (var i = 0; i < length; i++) {
        var sum = ((a[i] != null) ? a[i] : 0) + ((b[i] != null) ? b[i] : 0) + carry;
        var remainder = sum % 10;
        carry = (sum == remainder) ? 0 : 1;
        c.push(remainder);
    }

    if (carry) {
        c.push(carry);
    }

    return c.reverse();
}
