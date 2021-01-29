//Udemy Solution
function countUniqueValues(arr){
//The the number of unique integers using a counter
    let i =0
    for(let j=1; j<arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
        console.log(i,j)
    }


}


let NumArr = [1,1,2,3,3,4,5,6,6,7]
console.log(
    countUniqueValues(NumArr)
)
// => 7