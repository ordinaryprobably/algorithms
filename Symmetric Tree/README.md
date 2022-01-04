# LeetCode 71. Symmetric Tree
트리의 루트를 기준으로 트리가 대칭을 이루는지 Boolean 으로 반환하는 함수를 만들어야 하는 문제다.\
따라서 양쪽 Sub-Tree 가 같은 모양임을 확인하는 로직은 사용할 수 없다.\


```
var isSymmetric = function(root) {

  function helper(leftNode, rightNode) {
    if(!leftNode && !rightNode) return true;     // 양 쪽 다 자식노드가 없으면 true 리턴
    if(!leftNode || !rightNode) return false;    // 한 쪽만 자식노드가 있으면 false 리턴
    
    return leftNode.val === rightNode.val        // 여기서 좌우의 부모노드가 다르면 false 리턴.
       && helper(leftNode.left, rightNode.right) // 왼쪽의 왼쪽 자식노드와 오른쪽의 오른쪽 자식노드가 같고,
       && helper(leftNode.right, rightNode.left) // 왼쪽의 오른쪽 자식노드와 오른쪽의 왼쪽 자식도드가 같으면 true 리턴.
  }
  
  if(!root) return true;
  
  return helper(root.left, root.right);          // 앞에 return 을 붙여줘야 Boolean 을 반환함.
};
```

```helper``` 함수의 리턴 문을 봐야한다.\
세 가지 조건이 모두 참일 경우에만 true 를 리턴한다.
