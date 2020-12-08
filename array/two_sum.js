// https://leetcode.com/problems/two-sum/


//  @param {number[]} nums
//  @param {number} target
//  @return {number[]}
 
// Test cases
nums = [2,7,11,15], target = 9 //[0,1]
// nums = [3,2,4], target = 6 //[1,2]
// nums = [3,3], target = 6 //[0,1]

// cc: [], []
// cc: [1,1] => []
// cc: [2,7,2,7] => [0,1] multiple solutions

// Approach #1 (Brute force)
// Note: The complexity of the brute force algorithm is n^2 which is not acceptable. 

let twoSum = function(nums, target) {
    //for each element in the array in nums array 
    for(let i=0; i<nums.length; i++){
        //iterate over again for each element
        for(let j=0; j<nums.length; j++){
            //check if the sum equals the target
            if (nums[i]+nums[j] === target && i !== j){
                return [i, j]
            }
        }
    }
}


twoSum(nums, target) 