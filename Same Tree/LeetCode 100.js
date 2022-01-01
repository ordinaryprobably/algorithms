var isSameTree = function(p, q) {
  const result1 = [];
  const result2 = [];
    
  function helper1(node) {
    if(!node) {
      result1.push(null);
      
      return;
    }
    
    result1.push(node.val);
    
    helper1(node.left);
    helper1(node.right);
  }
  
  function helper2(node) {
  if(!node) {
    result2.push(null);
    
    return;
  };

  result2.push(node.val);

  helper2(node.left);
  helper2(node.right);
  }
  
  helper1(p);
  helper2(q);
  
  if(JSON.stringify(result1) === JSON.stringify(result2)) {
    return true;
  } else {
    return false;
  }
};
