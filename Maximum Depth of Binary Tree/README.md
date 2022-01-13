# 104. Maximum Depth of Binary Tree
Binary Tree 의 깊이를 반환하는 문제다.\
Depth First Search 의 재귀 풀이와 매우 비슷한 모양으로 풀 수 있다.\
꼭 너비 우선 탐색을 응용 할 필요가 없다.
```
function maxDepth(root) {
  let count = 0;
  
  function helper(node, depth) {
    if(!node) {                             // Base Case 를 만들어 준다.
      count = Math.max(count, depth);       // 왼쪽 끝과 오른쪽 끝을 가야하니까 Math.max 로 깊이를 비교해야 한다.
      
      return;
    }
    
    helper(node.left, depth + 1);           // 한 칸 내려갈 때 마다 depth += 1 을 해준다.
    helper(node.right, depth + 1);
  }
  
  helper(root, 0);                          // 시작 깊이는 0
  
  return count;
};
```
