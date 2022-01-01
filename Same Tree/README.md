단순히 두 트리가 같은지 확인하는 로직을 작성하면 된다.
두 트리를 따로 Array 에 담은 다음 두 Array 를 비교해서 Boolean 으로 반환한다.

```
var isSameTree = function(p, q) {
  const result1 = [];
  const result2 = [];
    
  function helper1(node) {
    if(!node) return;
    
    result1.push(node.val);
    
    helper1(node.left);
    helper1(node.right);
  }
  
  function helper2(node) {
  if(!node) return;

  result2.push(node.val);

  helper2(node.left);
  helper2(node.right);
  }
  
  helper1(p);
  helper2(q);
  
  if(JSON.stringify(result1) === JSON.stringify(result2)) {  // Array 를 비교할 때 JSON.stringify 를 사용하면 좋다.
    return true;
  } else {
    return false;
  }
};
```
