# Binary Tree 의 모든 루트 찾기
```
allPaths() {
  const path = [];                          //  Path 를 담을 Array.
  
  function helper(node) {
    if(!node) return;
    
    path.push(node.val);
    
    if(!node.left && !node.right) {
      console.log(path);                    // path 를 Array 형태로 콘솔에 찍는다.
    }
    
    helper(node.left);
    helper(node.right);
    
    path.pop();                             // 이 코드를 필수적으로 넣어줘야 한다.
  }
  
  helper(root);
}
```
