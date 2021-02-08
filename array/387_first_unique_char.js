
var firstUniqChar = function(s) {

    let counter = {}
    let result = -1
    
    for (let char of s){
        if (counter[char] === undefined){
            counter[char] = 1
        } 
        else {
            counter[char]++    
        }
    }
    
    for (let i = 0; i<s.length; i++){
        let char = s.charAt(i)
        
        if (counter[char] === 1){
            return i
        }

    // console.log(char)
        
    }
    
    return result
    
    
    
};