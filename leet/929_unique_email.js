        
/*
- Iterate through array of emails and check validity using helper fx
- valid email = string, includes '@', must have chars after '@' and before
    - save name and domain to variables
    - if valid, remove '.' before @ (indexOf less than @)
    - if valid, remove text after '+', before @
    - array doesn't include, push
    
- return array.count
 */


var numUniqueEmails = function(emails) {
    let result = []
    
    function validCheck (email) {
        let atSign = email.indexOf('@') 
        let plus = email.indexOf('+')
        let dot = email.indexOf('.')
        let name = email.substring(0, atSign)
        let domain = email.substring(atSign+1, email.length)
        
        if (plus < atSign && plus !== -1) {   //remove text after plus
            name = email.substring(0, plus)
        }
        
        if (dot < atSign && dot !== -1) {   //remove dot
            name = name.replace(/[.]/g, "")
        }

        if (!result.includes(name + '@' + domain)) {
            result.push(name + '@' + domain)
        }
    }
    
    for(let i=0; i<emails.length; i++) {
        validCheck(emails[i])
    }
    
    return result.length
};

/*
Space Complexity: O(7n)
Time complexity: O(5n^2)
O(n): for loop      
Nested O(n): indexOf x3, replace x1, includes x1
O(n * 5n) => O(5n^2)
*/