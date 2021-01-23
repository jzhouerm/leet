// var reverseString = function(s) {
//     const swap = (index1, index2) => {
//         return (index2, index1)
//     }
//     for (let i=0; i<s.length/2; i++){
//         // let front = s[i]
//         // s[i] = s[s.length-1-i]
//         // s[s.length-1-i] = front
//     }
    
//     return s. reverse()
// };

var reverseString = function(s) {
    const swap =(arr,idx1,idx2)=>{
        [arr[idx1],arr[idx2]]=[arr[idx2],arr[idx1]]
    }
    
    for (let i=0; i<s.length/2; i++){

        swap(s, i, s.length-1-i)
    }
    
    return s
};