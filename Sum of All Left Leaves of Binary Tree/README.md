# 404. Sum of Left Leaves
모든 Left Leaf 의 합을 구해야 한다.
```
    3
   / \
  9  20
    /  \
   15   7
```
> 위 트리에서의 정답은 `9 + 15` 로 `24` 가 된다.

일반적인 재귀 DFS 함수에서\
현재 위치가 왼쪽인지, 오른쪽인지 알려주는 매개변수를 추가해주면 간단히 풀 수 있다. 
```
function sumOfLeftLeaves(root) {
  let result = 0;

  function helper(node, isLeft) {         // isLeft 라는 Boolean 값을 받는 매개변수를 추가한다.
    if(!node) return;
    
    if(!node.left && !node.right) {
      if(isLeft) result += node.val;      // 현재 위치가 Left 일 때만 값을 더한다.
    }
    
    helper(node.left, true);              // node.left 는 true
    helper(node.right, false);            // node.right 는 false 를 적어서 위치를 명시한다.
  }
  
  helper(root);                           // 맨 처음은 helper 의 로직상 위치를 명시할 필요가 없기 때문에 isLeft 를 무시한다.
  
  return result;
};
```
