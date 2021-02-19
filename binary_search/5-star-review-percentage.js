class Solution {
    solve(reviews, threshold) {
        let num = 0, den = 0
        for(let i=0; i<reviews.length;i++){
            num+=reviews[i][0]
            den+=reviews[i][1]

        }
        let current = num/den*100
        let target = threshold
        let count = 0
        while(current<target){
            count++
            num+=1
            den+=1
            current=num/den*100
        }
        
        return count
    }
}
