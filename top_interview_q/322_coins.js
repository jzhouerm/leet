
function change(num) {
    num = Number(num);
    // Error handles non executable input
    if (!num || num % 1 !== 0 || num < 0) return null
  
    let coins = [25, 10, 5, 1];
    // Holds coin denominations
  
    for (let i = 0; i < coins.length; i++) {
      let temp = coins[i];
  
      coins[i] = Math.floor(num / coins[i]);
      // Sets array value to lowest value divisible by denomination
      
      num %= temp;
      // Sets num to remainder per previous denomination
    }
    return coins.reverse();
  }
  
  // console.log(change(33));