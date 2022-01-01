var isSymmetric = function(root) {
  
  function helper(leftNode, rightNode) {
    if(!leftNode && !rightNode) return true;
    if(!leftNode || !rightNode) return false;
    
    return leftNode.val === rightNode.val 
       && helper(leftNode.left, rightNode.right) 
       && helper(leftNode.right, rightNode.left)
  }
  
  if(!root) return true;
  
  return helper(root.left, root.right);
};
