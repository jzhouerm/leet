
// https://leetcode.com/problems/find-duplicate-file-in-system/
let paths = ["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)","root 4.txt(efgh)"]

// let paths = ["root/a 1.txt(abcd) 2.txt(efsfgh)","root/c 3.txt(abdfcd)","root/c/d 4.txt(efggdfh)"]

// Solution 1 - 108-164ms
var findDuplicate = function(paths) {
    let dict = {}
    
    for (let i = 0; i< paths.length; i++){
        let curr = paths[i].split(' ')      //[ 'root/a', '1.txt(abcd)', '2.txt(efgh)' ][ 'root/c', '3.txt(abcd)' ][ 'root/c/d', '4.txt(efgh)' ][ 'root', '4.txt(efgh)' ]
        //split element by spaces to separate the substring of the root from file paths, new array created for each element from original input array
        let root = curr[0] + '/'            //root/a/       root/c/     root/c/d/       root/
        //save the root which is the first substring of each element in the array
        
        for (let j = 1; j < curr.length; j++){      //iterates through files only!
            //
            let start = curr[j].indexOf('(')
            let end = curr[j].indexOf(')')
            let key = curr[j].slice(start + 1, end)    //abcd efgh abcd efgh efgh       curr[j].substring(start + 1, end) also works
            // console.log("curr[j]: ", curr[j], "start:", start, "end:", end,  "key:", key, "dict:", dict)
            if (!dict.hasOwnProperty(key)) {        //if(!dict[key])
                dict[key] = []
            }
            // console.log("curr[j]:", curr[j], "dict[key]:", dict[key] )
            dict[key].push(root + curr[j].slice(0, start));     //pushes the filename to key, excludes content
            // console.log("key: ", key, "exists?", dict.hasOwnProperty(key), dict)
            
        }
        
    }
     return Object.values(dict).filter(arr => arr.length > 1);
    //Object.values(dict) works but there's spaces b/w arrays, need to filter
}; //108-164ms

// // Solution 2 - 120-164ms
// var findDuplicate = function(paths) {
//     const map = {};
//     for (let text of paths) {
//         for (let i = 1, files = text.split(' '); i < files.length; i++) {
//             let paren = files[i].indexOf('(');
//             let content = files[i].substring(paren + 1, files[i].length - 1);
//             map[content] = map[content] || [];
//             map[content].push(files[0] + '/' + files[i].substr(0, paren));
//         }
//     }
//     return Object.values(map).filter(dups => dups.length > 1);
// }; // 120-164ms



// //Solution 152-168ms
// var findDuplicate = function(paths) {
//     //create an object to hold arrays for each set of file contents
//         //i.e.{abcd: [root/a1.txt, root/c/3.txt], efgh: [root/a/2.txt, ...]}
//     let fileContents = {}
//     let result = []
//     //loop over paths array and split(" ")
//     for ( let i = 0; i < paths.length; i++){
        
//         paths[i] = paths[i].split(" ")
//         //loop each inner path array, starting at j=1
//         //place each file path in the relative fileContents Obj key, joined ith it's directory path
//         for ( let j = 1; j < paths[i].length; j++ ){
//             const [name, contents] = paths[i][j].split('(')
//             if (!fileContents[contents]) {
//                 fileContents[contents] = [paths[i][0] + `/${name}`]
//             } else {
//                 fileContents[contents].push(paths[i][0] + `/${name}`)
//             }
//         }
//     }
    
//     // loop through fileContents and push each array into the return array
//     for (const filePath in fileContents) {
//         if (fileContents[filePath]. length > 1) {
//             result.push(fileContents[filePath])
//         }
//     }
    
//     return result
// }; //152ms-168ms



console.log(
    findDuplicate(paths)
)

/*

Solution#2: https://leetcode.com/problems/find-duplicate-file-in-system/discuss/104146/Simple-JavaScript-solution-using-map
*/

/*
Questions: (Assuming Notes #1-5 is given)
1. Can the input have a filename as its own element in the array without a root? need to extract index 0
2. Can the elements in the input array be of other data types (not string)? for .split()
3. Can the directory name repeat while containing different filenames?
4. Can I console.log? Google?

Observations:
Input is a flat array and Output is 
The root directory and all of it's files are a string as a single element in the input array
Need to extract the first substring before the space in each element

Approach/Options:
Nested for loop (Loop 1: iterate to separate root Loop 2: Extract the content as a key for hash, then push files as values)

Edge Cases Covered?


Can it be optimized?


Bonus Questions:

*/