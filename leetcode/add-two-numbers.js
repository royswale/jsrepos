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
    var l3 = new ListNode(0);
    var l3next = l3;

    var l1next = l1;
    var l2next = l2;

    // var power = 1;
    var sum = 0;
    var quotient = 0;
    var remainder = 0;


    do {
    	sum = l1next.val + l2next.val + l3next.val;

    	// Math.pow(10, power)
        remainder = sum % 10;
    	quotient = (sum - remainder) / 10;

    	l3next.val = remainder;

    	l1next = l1next.next || new ListNode(0);
    	l2next = l2next.next || new ListNode(0);

    	if (l1next.val || l2next.val || l1next.next || l2next.next || quotient) {

    		var node = new ListNode( quotient );
			l3next.next = node;
			l3next = node;
    	} else {
    		break;
    	}

    } while ( true );

    return l3;
};


// a recursive solution from "sample 195 ms submission" in chart "Accepted Solutions Runtime Distribution"
// https://leetcode.com/submissions/detail/123204690/
// var addTwoNumbers = function(l1, l2) {
//     if(l1 == null)
//         return l2;

//     if(l2 == null)
//         return l1;

//     var l = new ListNode(l1.val + l2.val);
//     l.next = addTwoNumbers(l1.next, l2.next);

//     if(l.val > 9)
//         {
//             l.val -= 10;
//             l.next = addTwoNumbers(l.next, new ListNode(1))
//         }

//    return l;
// };



// test case 1
var l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

var l2 = new ListNode(8);
l2.next = new ListNode(5);
l2.next.next = new ListNode(6);

console.log( addTwoNumbers(l1, l2) );

// Your input

// [2,4,3]
// [5,6,4]

// Your answer

// [7,0,8]

// Expected answer

// [7,0,8]

// // test case 2
// Input:  	[1,6,0,3,3,6,7,2,0,1]
// 			[6,3,0,8,9,6,6,9,6,1]
// Output: 	[7,9]
// Expected: 	[7,9,0,1,3,3,4,2,7,2]
