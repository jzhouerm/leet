// Write a function called maxSubarraySum which accepts an array of integers 
// and a number called nums. The function should calculate the maximum sum of n 
// consecutive elements in the array

// Solution #1 O^2 (Inefficient for long arrays)

// function maxSubarraySum(arr, num) {

//     if( num > arr.length){
//         return null
//     }
//     let max = -Infinity;
//     //set to negative infinity to cover all integers

//     for(let i = 0; i < arr.length - num + 1; i++){
//         //subtract num from length b/c you can't start adding if there's less than 'num'
//         //integers remaining in the array
//         //temp is storing the current value to compare to the max value 

//         temp = 0
//         for(let j=0; j<num; j++){
//             temp += arr[i+j]
//         }
//         if (temp > max){
//             max = temp;
//         }
//     }

//     return max
// }



// console.log(
//     maxSubarraySum([1,2,5,2,8,1,5], 2)
// )
// // => 10 (2+8)




// ************************************************************************************************************************************

// Solution #2 O(n) (Sliding Window Pattern)
// Start from the beginning of the Array, remove first index and add last index, add and keep sliding until the end of the array

function maxSubarraySum(arr, num) {

    let maxSum = 0
    let tempSum = 0

    if(arr.length < num) return null

    for(let i = 0; i < num; i++){
        maxSum += arr[i]
    }

    tempSum = maxSum;
    for (let i = num; i < arr.length; i++){
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum)
    }

    return maxSum
}



console.log(
    maxSubarraySum([1,2,5,2,8,1,5], 2)
)
// => 10 (2+8)