// Arrays
// Methods: push, pop, shift, unshift, indexOf, slice

// shift and unshift remove and add (respectively) to the front of an array
// push and pop add and remove (respectively) to the end of an array

// arr.slice(idx1, idx2) -> idx1 is inclusive, idx2 is exclusive

var arr = [1, 2, 3, 4, 5];

arr.forEach((element) => {
  console.log(element);
});

// .forEach callback function takes 3 params: arr element, index, array object ref

function logNums(el, i, arr) {
  console.log(el, i, arr);
}
 
[1,2,3].forEach(logNums);



