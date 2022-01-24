# LeetCode 26. Remove Duplicates from Sorted Array
정렬된 Array 를 `In-Place` 로 중복 제거 해야한다.\
새로운 공간을 사용할 수 없으며, 인자로 받은 Array 를 변형해야 한다.

```
var removeDuplicates = function(nums) {
  let left = 0;
  let current = 1;
  
  while(current < nums.length) {
    if(nums[current] === nums[left]) {
      nums.splice(current, 1)
    } else {
      left++;
      current++;
    }
  }

  return nums;
};
```

**[0, 0, 1, 1, 2]** left: [0], current: [1]

**[0, 1, 1, 2]** left: [0], current: [1]

**[0, 1, 1, 2]** left: [1], current: [2]

**[0, 1, 2]** left: [1], current: [2]

Array.prototype.splice() 를 이용해서 포인터를 움직이는 대신 Array 의 길이를 축소해가며 해결한다.
