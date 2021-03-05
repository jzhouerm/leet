/*
Return the shortest balanced string, otherwise, return -1
A string is considered balanced when every letter in the string appears both in uppercase and lowercase
For example, CATattac is balanced (a, c, t occur in both cases). Madam is not (a, d only appear in lowercase).
Write a function that given a string returns the shortest balanced substring of that string.
Can this be solved with a sliding window approach?
Update:
More examples
“azABaabza” returns “ABaab”
“TacoCat” returns -1 (not balanced)
“AcZCbaBz” returns the entire string
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

/*
https://leetcode.com/discuss/interview-question/963586/Microsoft-or-OA-or-Codility
*/