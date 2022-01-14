# 226. Invert Binary Tree
Binary Tree 를 좌우로 반전시키는 문제다.\
인자로 받은 Tree 를 직접 변형시키는 방식으로 해결했다.
```
function invertTree(root) {
  
  function helper(node) {
    if(!node) return null;
    
    const left = node.left;         // 좌우 노드를 바꾸는 로직
    
    node.left = node.right;         // 좌우 노드를 바꾸는 로직
    node.right = left;              // 좌우 노드를 바꾸는 로직 (따로 함수로 빼도 된다.)
    
    helper(node.left);
    helper(node.right);
  }
  
  helper(root);
  
  return root;
};
```
