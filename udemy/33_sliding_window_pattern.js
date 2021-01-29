// Write a function called maxSubarraySum which accepts an array of integers 
// and a number called nums. The function should calculate the maximum sum of n 
// consecutive elements in the array

function maxSubarraySum(arr, num) {

    if( num > arr.length){
        return null
    }
    let max = -Infinity;
    for(let i=0; i<arr.length - num + 1; 1++){
        temp = 0
        for(let j=0; j<num; j++){
            temp += arr[i+j]
        }
        if (temp > max){
            max = temp;
        }
    }

    
}



console.log(
    maxSubarraySum([1,2,5,2,8,1,5], 2)
)
// => 10 (2+8)