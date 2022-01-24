# 83. Remove Duplicates from Sorted List
Sorted Linked List 에서 중복 값을 제거한 Sorted Linked List 를 반환하면 되는 문제다.\
`[1, 1, 2, 2, 2, 3, 4]` 를 `[1, 2, 3, 4]` 로 만들어야 한다.\
두가지 풀이가 가능하다.
### 1. In Place 로 주어진 Linked List 를 순회하며 중복을 제거하기. (중요)
```
function removeDups(head) {
  let currentNode = head;                                       // 메인 포인터를 만든다.
  let prevNode = null;                                          // 메인 포인터를 뒤따라 가는 포인터.
  
  while(currentNode) {
    if(prevNode && (prevNode.val === currentNode.val)) {        // 두 포인터가 중복일 때,
      prevNode.next = currentNode.next;                         // prevNode 는 움직이지 않고 next 값만 current 의 next 로 옮긴다.
      currentNode = currentNode.next;                           // currentNode 는 한 칸 앞으로 움직인다.
    } else {
      prevNode = currentNode;                                   // 중복이 아니면 멀리 있던 prevNode 를 currentNode 위치로 옮기고,
      currentNode = currentNode.next;                           // 두 포인터가 나란히 붙어있도록 재조정 한다.
    }
  }
  
  return head;
};
```
### 2. 주어진 Linked List 에서 값만 뽑아서 중복이 없는 Array 로 만든다. Loop 를 돌려서 Array 를 다시 Linked List 로 변환한다.
```
function removeDups(head) {
  if(!head) return head;
  
  const list = [];                                        // Linked List 의 모든 값을 뽑아서 Array 로 만드는 로직
  let current = head;
  
  while(current) {
    list.push(current.val);
    current = current.next;
  }
  
  const pureList = [ ...new Set(list) ];                  // Set 를 이용해 Array 에서 중복을 제거한다.
  const pureLinkedList = new ListNode(pureList[0]);
  let temp = pureLinkedList;
  
  for(let i = 1; i < pureList.length; i++) {              // 중복이 없는 Array 를 Linked List 로 만든다.
    temp.next = new ListNode(pureList[i]);
    temp = temp.next;
  }
  
  return pureLinkedList;
};
```
