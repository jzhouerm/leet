var fizzBuzz = function(n) {
    let arr = []
    for(let i=1; i<=n; i++){
        if(i%3 === 0 && i%5 !==0){
            arr.push("Fizz")
        }
        if(i%5 === 0 && i%3 !==0){
            arr.push("Buzz")
        }
        if(i%3 === 0 && i%5 ===0){
            arr.push("FizzBuzz")
        }
        if(i%3 !== 0 && i%5 !==0){
            arr.push(i.toString(10))
        }
        // console.log("n=", n, "i=",i)
    }
    return arr
}

console.log(
    fizzBuzz(15)
)