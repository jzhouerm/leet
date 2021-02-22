
const s = "abcabcbb"
const s = "bbbbb"
const s = "pwwkew"
const s = ""
const s = "dvdf"

//need to do a nested for loop
//need to iterate through the entire array and find the longest and save then restart at new index and repeat
var lengthOfLongestSubstring = function(s) {
    let arr = s.split("")
    let longest = []
    let count = 0
    
    for ( let i = 0; i< arr.length; i++){
        if ( longest.includes(arr[i]) ){
            longest = [arr[i]]
            console.log("string cleared", longest, arr[i])
        }
        
        if ( !longest.includes(arr[i])){
            longest.push(arr[i])
            if (longest.length > count){
                count = longest.length
            }
            console.log("i=", arr[i], "longest= ", longest, count)
        }

    }
    return count
    
};