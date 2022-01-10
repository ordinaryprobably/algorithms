# 617. Merge Two Binary Trees
두 Binary tree 를 겹쳤을때, 겹치는 노드는 서로 더하고, 안 겹치는 노드는 추가해서 새로운 Binary Tree 를 만들어야 한다.
```
function mergeTrees(root1, root2) {
  if(!root1) return root2;
  if(!root2) return root1;
  
  const tree = new TreeNode(root1.val + root2.val);
  
  tree.left = mergeTrees(root1.left, root2.left);
  tree.right = mergeTrees(root1.right, root2.right);
  
  return tree;
};
```
