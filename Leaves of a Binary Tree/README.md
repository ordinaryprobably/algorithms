# Binary Tree 의 모든 Leaf Node 찾기
```
getLeaves() {
  const leaves = [];
  
  function helper(node) {
    if(!node) return;
    
    if(!node.left && !node.right) {
      leaves.push(node.val);            // DFS 에서 끝에 닿을때 마다 leaves 에 담는다.
    }
    
    helper(node.left);
    helepr(node.right);
  }
  
  helper(root);
  
  return leaves;
}
```
