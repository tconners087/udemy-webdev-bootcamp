var nums = [1, 2, 3, 4, 5];

function print(el) {
  console.log(el);
}

function myForEach(arr, func) {
  for(var i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
}

myForEach(nums, print);

myForEach(nums, (num) => {
  console.log("Anonymous Callback: " + num);
});

Array.prototype.myForEach = function(func) {
  for(var i = 0; i < this.length; i++) {
    func(this[i]);
  }
}

nums.myForEach(print);