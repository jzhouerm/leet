function takeShower(){
    return "Showering!"
}

function eatBreakfast(){
    let meal = cookFood()
    // console.log(meal)
    return `Eating ${meal}`
}

function cookFood(){
    let items = ["Oatmeal", "Eggs", "Protein Shake"]
    // console.log(items[Math.floor(Math.random()*items.length)])
    return items[Math.floor(Math.random()*items.length)]
}

function wakeUp(){
    takeShower()
    eatBreakfast()
    console.log("Ok ready to go to work!")
}

// console.log(
    wakeUp()
// )