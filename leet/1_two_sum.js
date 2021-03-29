// https://leetcode.com/problems/two-sum/
// https://www.youtube.com/watch?v=_CoCO62fn_E


// Test cases
// const nums = [2,7,11,15], target = 9 //[0,1]
const nums = [3,2,4], target = 6 //[1,2]
// const nums = [3,3], target = 6 //[0,1]
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

/*
Approach #2 76ms
The better way is using JS objects. The characteristic of JS objects is it has unique keys.
Complexity: O(n) because we're visiting each number only once
*/

function twoSum2(nums, target){
    const comp = {}     // comp = {7:0}
    const len = nums.length

    for (let i = 0; i < len; i++){
        //if our number exists as a complement and is >=0, then return the complement's index which is nums[i] and index of the number itself
        if(comp[nums[i]] >=0){
            return [comp[nums[i]], i]
        }
        //inside complement, subtracting number from the target and saving the index as the value
        comp[target - nums[i]] = i;

    }
    //in case there are no matches
    return []
    
}       

//Approach #3 80ms
function twoSum(nums, target){
    const comp = new Map()
    const len = nums.length

    for (let i = 0; i < len; i++){
        //if our number exists as a complement and is >=0, then return the                       
        //complement's index which is nums[i] and index of the number itself
        if(comp[nums[i]] >=0){
            return [comp[nums[i]], i]
        }
        //inside complement, subtracting number from the target and saving the index             
        //as the value
        comp[target - nums[i]] = i;

    }
    //in case there are no matches
    return []
    
} 



//Map stores the order of the key/pair values whereas POJO doesnt but we don't care about order here.

// twoSum2(nums, target)
// console.log(twoSum(nums, target))
console.log(twoSum2(nums, target))


// For Map, it returns JS objects...9-7=2...index=1 
// => {2:1}
// => {complement/key : value}
// comp[target - nums[i]] = i;

[Running] node "/Users/jules/Development/code/leet/array/tempCodeRunnerFile.js"
Map(0) { '2': 1, '7': 0, '-2': 2, '-6': 3 }
Map(0) { '2': 1, '7': 0, '-2': 2, '-6': 3 }
undefined

[Done] exited with code=0 in 0.055 seconds