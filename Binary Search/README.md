O(log N) 의 시간 복잡도로 target 값이 정렬된 배열 속에 존재하는지 확인하는 문제다.\
만약 target 이 배열에 존재하지 않는다면, target 이 위치해야 할 Index 값을 반환해야 한다.

```
function searchIndex(nums, target) {
  let index = 0;

  if(biSearch(nums, target) === -1) {
    if(nums[0] > target) {
      return 0;
    } else if(nums[nums.length - 1] < target) {
      return nums.length;
    } else {
      for(let num of nums) {
        if(target > num) {
          index++;
        }
      }

      return index;
    }
  }

  return biSearch(nums, target);

  function biSearch(arr, tar) {                           // 내부에서 이진 탐색 함수를 구현했다.
    let start = 0;
    let end = arr.length - 1;

    while(start <= end) {
      const mid = start + Math.floor((end - start) / 2);  // 계속 새로운 mid 값을 구한다.

      if(arr[mid] === tar) return mid;                    // Base case.

      if(arr[mid] < tar) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }

    return -1;
  }
}
```
