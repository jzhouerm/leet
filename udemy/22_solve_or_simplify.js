// Problem: Function that adds the number of each char when input is a string 
// Topic: counting using an object

function countChar (str) {
    //loop over string, for each character...
    var result = {}
    for(var i = 0; i < str.length; i++){
        var char = str[i].toLowerCase()
        //if the char is a number/letter AND is a key in object, add 1 to count
        if(result[char] > 0){
            result[char]++
        }
        //if the char is a number/letter AND not in object, add obj and set value as 1
        else{
            result[char] = 1
        }
        // if char is something else (space, period, etc.), do nothing
    }
    //return object
    return result
}

console.log(
    countChar("string")
)