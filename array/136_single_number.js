
https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/549/

// Test cases 
// nums = [2,2,1]          //Output: 1
// nums = [4,1,2,1,2]      //Output: 4
nums = [1]              //Output: 1


let singleNumber = function(nums) {
  let set = new Set(); // use a set for O(1) lookups

  for (num of nums) {
    /* add the number if it's not in the set, but remove it if it is. this way, after every number has been iterated over, the only number remaining is the number that only shows up once */
    if (set.has(num)) {
      set.delete(num);
    } else {
      set.add(num);
    }
  }

  // there will only be one number remaining in the set. return it
  return Array.from(set)[0];   
};

// singleNumber(nums)

console.log(singleNumber(nums))
