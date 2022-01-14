# 160. Intersection of Two Linked Lists
https://assets.leetcode.com/uploads/2021/03/05/160_statement.png \
어느 지점에서 하나가 되는 두 Linked List 의 교차 지점을 찾아내는 알고리즘이다.\
Set 자료구조를 응용해서 중복을 찾아냈다.
```
function getIntersectionNode(headA, headB) {
  if(!headA || !headB) return null;
  
  const set = new Set();                    // Set 는 중복을 허용하지 않는 Array 라고 보면 된다.
  let pointA = headA;
  let pointB = headB;
  
  while(pointA) {                           // pointA 의 첫 번째 노드를 기준으로 
    while(pointB) {                         // pointB 의 모든 노드를 비교하고, pointA 를 다음으로 넘기는 방식.
      set.add(pointB);
      
      pointB = pointB.next;
    }
    
    if(set.has(pointA)) return pointA;      // pointB 의 모든 노드를 set 에 담았으니 pointA 의 노드를 하나씩 비교하면 된다.
    
    pointA = pointA.next;
  }
  
  return null;
};
```
