function mystery(input) {
    // The input will be an array of strings
    let index = 0
    let flag = false
    while ( index < input.length ) {
        var word = input[index]
        input.forEach(thisWord => {
            flag = flag || thisWord === word
        })
        index++
        // console.log("flag", flag)
    }
    return flag

}

mystery(["string1", "string2", "word"])