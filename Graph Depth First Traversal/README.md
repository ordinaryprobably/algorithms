# Depth First Traversal of Graph as Adjacency List
## Directed Graph using while-loop
```
function DFS(graph, startingNode) {
  const stack = [ startingNode ];               // Stack 자료 구조를 사용해야 한다.
  const result = [];
  
  while(stack.length > 0) {
    const current = stack.pop();
    
    result.push(current);
    
    for(let neighbor of graph[current]) {
      result.push(neighbor);
    }
  }
  
  return result;
}
```
## Directed Graph using recursion
```
function DFS(graph, startingNode) {             // neighbor 가 없는 경우가 Base Case 이기 때문에 굳이 
  console.log(startingNode);                    // Base Case 를 넣을 필요가 없다.
  
  for(let neighbor of graph[startingNode]) {
    DFS(graph, neighbor);
  }
}
```
