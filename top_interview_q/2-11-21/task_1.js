/*
Write a function solution that, given an integer N, returns the 
maximum possible value obtained by inserting one '5' digit inside 
the decimal representation of integer N.
*/

// let N = 268  //5268
// let N = 670  //6750
let N = 0    //50
// let N = -8000 //-5999

function solution(N) {
    let num = Math.abs(N).toString()
    let largest = -100000
    let str = ""

    for (let i = 0; i < num.length+1; i ++){
        let test = str + "5" + num.substring(i, num.length)
        let testNum = parseInt(test)

        if(N < 0) testNum = testNum * -1
        largest = Math.max(testNum, largest)
        str += num[i] 
    }

    return largest
}

console.log(
    solution(N)
)
