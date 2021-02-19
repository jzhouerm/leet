/*
Input:  [1,2,3,4]
Output: [24,12,8,6]
*/


var productExceptSelf = function(nums) {
    let newArr = []
    const reducer = (accumulator, currentValue) => accumulator * currentValue;
    
    for ( let i = 0; i < nums.length; i++){
        let copy = [...nums]
        let arr = copy.splice(i, 1)
        let product = copy.reduce(reducer)
        newArr.push(product)

    }
    return newArr
    
};
//time limite exceeded O(n^2) bc of reducer

