//https://leetcode.com/problems/binary-search/

var search = function(nums, target) {
    let start = 0
    let end = nums.length -1
    let mid
    
    while (end >= start) {
        mid = Math.floor((start+end)/2)
        if (nums[mid] === target) {
            return mid
        }
        
        if ( target < nums[mid] ) {
            end = mid-1
            
        }else {
            start = mid+1
        }
    }
    
    return -1

}; //80ms