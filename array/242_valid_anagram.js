// Solution 1 (My brute force)

// var isAnagram = function(s, t) {
//     let sHash = {}
//     let tHash={}
//     if(s.length === t.length){
//         for (let i=0; i<s.length; i++){
//             sHash[s[i]] ? sHash[s[i]]++ : sHash[s[i]] = 1
//         } 

//         for (let j=0; j<t.length; j++){
//             tHash[t[j]] ? tHash[t[j]]++ : tHash[t[j]] = 1
//         }
    
//     }
//     else{
//         return false
//     }
//     for (let char in sHash){
//         if(sHash[char] !== tHash[char]){
//             return false
//         }
        
//     }
//     return true
    
// };

var isAnagram = function(s, t) {
    let sHash = {}
    let tHash={}
    if(s.length === t.length){
        for (let i=0; i<s.length; i++){
            sHash[s[i]] ? sHash[s[i]]++ : sHash[s[i]] = 1
        } 

        for (let j=0; j<t.length; j++){
            tHash[t[j]] ? tHash[t[j]]++ : tHash[t[j]] = 1
        }
    
    }
    else{
        return false
    }
    for (let char in sHash){
        if(sHash[char] !== tHash[char]){
            return false
        }
        
    }
    return true
    
};