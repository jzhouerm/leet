let companyDomains = ["palantir.com", "apple.com"]
// let newDomains = ["palantir.biz", "apple.org", "apple.com", "appleorchard.net"]
let newDomains = ["palantir.bi.z", "apple.org", "apple.com", "appleorchard.net"]
//name.host

function typosquats(companyDomains, newDomains) {
  let result = []
  let resultCount = result.length
 // console.log(companyDomains, newDomains)
 
}

// typosquats(companyDomains, newDomains)


/*
- iterate through company domains and store name=key, host=value
  old = {'palantir': 'com', 'apple': 'com'}
- iterate through newDomains, split string, if old includes new name and 
  if(old[newDomains[j]] && old[newDomains[j]] !== newhost) push
return array of possible typosquats

Edge cases:
- empty inputs return empty array
- host names can have internal periods
- exact matches are not typosquats

Extra practice
https://www.hackerrank.com/contests/ashwamedhav2/challenges/url-validator
*/