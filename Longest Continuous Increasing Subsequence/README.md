# 674. Longest Continuous Increasing Subsequence
*Longest increasing subarray* 의 길이를 찾아내는 문제다.\
`[1, 2, 4, 8, 3]` 의 경우 `1, 2, 4, 8` 이 해당되기 때문에 `4` 를 반환한다.\
`[2, 2, 2, 2, 2]` 의 경우 0 이 아닌 `1` 을 반환한다.\
`[5, 4, 3, 2, 1]` 의 경우 또한 `1` 을 반환한다.
```
function findLongest(nums) {
  let length = 1;
  let maxLength = 0;
  
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] < nums[i + 1]) {
      length++;
    } else {
      length = 1;
    }
    
    maxLength = Math.max(length, maxLength);
  }
  
  return maxLength;
}
```
