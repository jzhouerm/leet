// document.addEventListener('DOMContentLoaded', (event) => {
//     console.log('works for me')
// })

// function mystery(input) {
//     // The input will be an array of strings
//     let index = 0
//     let flag = false
//     while ( index < input.length ) {
//         var word = input[index]
//         input.forEach(thisWord => {
//             flag = flag || thisWord === word
//             console.log("inside the loop", flag, thisWord, word)
//         })
//         index++
//     }
//     return flag

// }

function mystery(input) {
    // The input will be an array of strings
    let flag = false
    for( let i=0; i<input.length; i++){
        if(input[i] === "u"){
            return "works"
        }
    }
    return flag

}

console.log(
mystery("stuff")
)