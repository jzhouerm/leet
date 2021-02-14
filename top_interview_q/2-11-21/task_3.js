
// let S = "Wed"
// let K = 2
//"Fri"

let S = "Sat"
let K = 23
//"Mon"

function solution(S, K) {

    let weekNums = {"Sun": 1, "Mon": 2, "Tues": 3, "Wed": 4, "Thu": 5, "Fri": 6, "Sat": 7}
    let weekdays = {1: "Sun", 2: "Mon", 3: "Tues", 4: "Wed", 5: "Thu", 6: "Fri", 7: "Sat"}
    let key = weekNums[S]
    let day = (K + key) % 7
    return weekdays[day]

}

console.log(
    solution(S, K)
)