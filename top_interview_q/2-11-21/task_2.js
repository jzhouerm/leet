/*
Return the shortest balanced string, otherwise, return -1
*/

// let S = "azABaabza" //"ABaab"
// let S = "TacoCat"   //-1
// let S = "AcZCbaBz"  //"AcZCbaBz"
// let S = "abcdefghijklmnopqrstuvwxyz"    //-1
// let S = "ABaab"
let S = "a"

function solution(S) {
    
    function validCheck(string) {
        let testSet = new Set(string)

        for( let letter of testSet){
            
            if (letter === letter.toUpperCase() && !testSet.has(letter.toLowerCase())){
                return false
            }
            if (letter === letter.toLowerCase() && !testSet.has(letter.toUpperCase())){
                return false
            }
        }
        return true
    }
    for( let i = 2; i <= S.length; i++){

        for( let j = 0; j <= S.length-i; j++){
            const textString = S.substring(j, j+i)
            if (validCheck(textString)) return textString.length
        }
    }

    return -1

}

console.log(
    solution(S)
)
