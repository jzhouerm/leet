//Build function that returns sum of all 2 digit integers
function twoDigit(arr){
    
    let sum = 0
    
    for( let i = 0; i < arr.length; i++ ) {
        if(arr[i].toString()[i] !== "-" && arr[i].toString().length === 2) {
            sum += arr[i]
        }
        if(arr[i].toString()[0] === "-" && arr[i].toString().length === 3) {
            sum += arr[i]
            
        }
    }
    return sum

}

console.log(twoDigit([-1000, -28, 44, 101, 308])) //16