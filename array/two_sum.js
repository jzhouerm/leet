// https://leetcode.com/problems/two-sum/


//  @param {number[]} nums
//  @param {number} target
//  @return {number[]}
 
var twoSum = function(nums, target) {
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