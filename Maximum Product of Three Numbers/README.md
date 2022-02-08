# 628. Maximum Product of Three Numbers
주어진 배열 속에서 곱이 가장 큰 세 숫자를 찾아서 그 곱을 반환하는 문제다.\
예를 들어, `[1, 4, 3, 2]` 에서 `2, 3, 4` 의 곱이 가장 크므로 `24` 를 반환해야한다.\
> 배열 속에 **음수**가 존재할 수 있다.\
> `[-100, -50, 1, 2, 3]` 에서 `-100 * -50 = 5000` 이 되므로 `-100, -50, 3` 을 선택해야 한다.\

### 총 두 가지의 선택지를 고려하면 된다.
1. 배열을 오름차 순으로 정렬한 뒤, 마지막 3 개 숫자의 곱을 찾는다.
2. 배열을 오름차 순으로 정렬한 뒤, 처음 2 개 숫자와 마지막 1 개 숫자의 곱을 찾는다.
```
var maximumProduct = function(nums) {
  nums.sort((a, b) => a - b);
  
  const option1 = nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3];
  const option2 = nums[0] * nums[1] * nums[nums.length - 1];
  
  return Math.max(option1, option2);
};
```
### 위 코드를 최적화 할 수 있다.
sort 메서드를 사용하기 때문에 어쩔 수 없이 O(n^2) 의 시간복잡도를 갖는다.\
하지만 이 문제를 해결하는데 필요한 숫자들은
1. 배열에서 가장 작은 수
2. 배열에서 두 번째로 작은 수
3. 배열에서 가장 큰 수
4. 배열에서 두 번째로 큰 수
5. 배열에서 세 번째로 큰 수

5 개면 충분하다.\
이는 한 번의 순회로 알 수 있다.