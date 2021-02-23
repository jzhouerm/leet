
// https://leetcode.com/problems/find-duplicate-file-in-system/
let paths = ["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)","root 4.txt(efgh)"]

// Solution 1 - 196 ms
// var findDuplicate = function(paths) {
//     let fileDic = {};
//     for(let i of paths){
//         var cur = i.split(/\s+/g);
//         var pathS = cur[0];
//         for(let j of cur){
//             var content = j.match(/\([a-z]+\)/g);
//             var file = j.match(/[0-9a-z]+\.txt/g);
//             if(content!=null){
//                 if(!fileDic[content]){
//                     fileDic[content]=[];
//                 }
//                 fileDic[content].push(pathS+"/"+file);
//             }
//         }
        
        
//     }
//     let test = Object.values(fileDic).filter(item=>item.length>1);
//     return test;
// };


// Solution 2 - 108 ms
var findDuplicate = function(paths) {
    let dict = {};
    let output = [];
    
    for (let i = 0; i < paths.length; i++) {
        let curr = paths[i].split(' ');             //['r', 'o', 'o', 't', '/', 'a',' ', '1', '.', 't', 'x', 't','(', 'a', 'b', 'c', 'd', ')',' ', '2', '.', 't', 'x', 't','(', 'e', 'f', 'g', 'h', ')']
        let root = curr[0] + '/';                   //'r/'

        for (let j = 1; j < curr.length; j++) {
            let start = curr[j].indexOf('(');   
            let end = curr[j].indexOf(')');     
            let key = curr[j].slice(start + 1, end);    //content
            // console.log("curr[j]: ", curr[j], "start: ", start, "end: ", end,  "key: ", key)

            if (!dict.hasOwnProperty(key)) {
                dict[key] = [];
            }
            dict[key].push(root + curr[j].slice(0, start));
        }
    }
    // return Object.values(dict).filter(arr => arr.length > 1);
};



console.log(
    findDuplicate(paths)
)

/*

Solution: https://leetcode.com/problems/find-duplicate-file-in-system/discuss/104146/Simple-JavaScript-solution-using-map
*/

