

var balancedStringSplit = function(s) {
    
    let temp1 = 0
    let temp2 = 0
    let counter = 0
    let first = s[0]
    
    for ( let i = 0; i < s.length; i++){
        if ( s[i] === first){
            temp1++
            if (temp1 === temp2){
                counter++
                temp1 = 0
                temp2= 0
            }
        }
        if (s[i] !== first){
            temp2++
            if (temp1 === temp2){
                counter++
                temp1 = 0
                temp2= 0
            }
        }
        console.log(temp1,temp2, counter)
    }
    return counter
};