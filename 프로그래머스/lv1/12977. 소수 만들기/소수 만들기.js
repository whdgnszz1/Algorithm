
function solution (nums) {
  let result = 0
  let sumArr = []
  for(let i = 0 ; i < nums.length - 2 ; i++) {
    for(let j = i + 1 ; j < nums.length - 1 ; j++) {
      for(let k = j + 1 ; k < nums.length ; k++) {
        sumArr.push(nums[i] + nums[j] + nums[k])
      }
    }
  }

  function isPrime(N) {
    if (N === 1) return false;
    for (let i = 2; i <= Math.sqrt(N); i++) {
        if (N % i === 0) return false;
    }
    return true;
  }

  for(let m = 0 ; m < sumArr.length; m++) {
   if(isPrime(sumArr[m])) result++
  }
  return result
}
