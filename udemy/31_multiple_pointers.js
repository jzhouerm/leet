//Udemy Solution
function countUniqueValues(arr){
//The the number of unique integers using a counter
//input must be already sorted
//compare each number in arr to i
    if (arr.length === 0) return 0
    let i =0
    for(let j=1; j<arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
        // console.log(i,j)
    }
    return i+1


}


let NumArr = [1,1,2,3,3,4,5,6,6,7]
console.log(
    countUniqueValues(NumArr)
)
// => 7