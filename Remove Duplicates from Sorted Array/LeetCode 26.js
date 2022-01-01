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
