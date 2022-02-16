# 55. Jump Game
점프 게임을 위한 배열이 주어진다. 시작은 첫 번째 인덱스에서 하며, 각 인덱스의 요소는 최대 점프 거리를 의미한다.\
예를 들어 [0] 인덱스에 `2` 가 있다면, 0 에서 2 칸 전진해서 [2] 인덱스까지 도달할 수 있다는 것이다. \
하지만 이는 최대값이며, 필요하다면 그 것 보다 적게 뛰어도 괜찮다.\
**주어진 배열에서 마지막 인덱스에 도달하는 것이 가능한지 여부를 Boolean 으로 반환해야 한다.**\
<br/>
`[2,3,1,1,4]` 는 여러가지 방법으로 마지막 인덱스에 도달할 수 있기 때문에 `true` 다.\
`[3,2,1,0,4]` 는 처음 세 인덱스에서 어떤 방법을 사용하더라도 [3] 번 인덱스로 빠지기 때문에 마지막 인덱스에 도달할 수 없다.
### Greedy 알고리즘을 이용한 풀이
Greedy: 오직 각각의 상황에서 최선의 선택을 연속하는 방법. 
```
function jump(nums) {
  let currentIndex = 0;
  let maxJumpIndex = 0;
  let targetIndex = nums.length - 1;
  
  while(currentIndex < nums.length) {
    maxJumpIndex = Math.max(maxJumpIndex, (currentIndex + nums[currentIndex]));
    
    if(maxJumpIndex >= targetIndex) return true;
    if(maxJumpIndex <= currentIndex && nums[currentIndex] === 0) return false;
    
    currentIndex++;
  }
  
  return false;
}
```
*더 짧은 풀이*
```
function jump(nums) {
  let max = nums[0];
  
  for(let i = 0; i < nums.length; i++) {
    if(max < i) return false;
    
    max = Math.max(max, i + nums[i]);
  }
  
  return true;
}
```
