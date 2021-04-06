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
z
a
a
a
a