
// https://leetcode.com/problems/find-duplicate-file-in-system/
let paths = ["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)","root 4.txt(efgh)"]


// Solution 1 - 108-164ms
var findDuplicate = function(paths) {
    let dict = {}
    let output = []
    
    for (let i = 0; i< paths.length; i++){
        let curr = paths[i].split(' ')
        let root = curr[0] + '/'
        
        for (let j = 1; j < curr.length; j++){
            let start = curr[j].indexOf('(')
            let end = curr[j].indexOf(')')
            let key = curr[j].slice(start + 1, end)
            // console.log("curr[j]: ", curr[j], "start:", start, "end:", end,  "key:", key, "dict:", dict)
            if (!dict.hasOwnProperty(key)) {
                dict[key] = []
            }
            // console.log("curr[j]:", curr[j], "dict[key]:", dict[key] )
            dict[key].push(root + curr[j].slice(0, start));
            // console.log("key: ", key, "exists?", dict.hasOwnProperty(key), dict)
            
        }
        
    }
     return Object.values(dict).filter(arr => arr.length > 1);
    //Object.values(dict) works but there's spaces b/w arrays, need to filter
}; //108-164ms



console.log(
    findDuplicate(paths)
)

/*

Solution#2: https://leetcode.com/problems/find-duplicate-file-in-system/discuss/104146/Simple-JavaScript-solution-using-map
*/

