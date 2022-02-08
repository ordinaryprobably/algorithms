# 876. Middle of the Linked List
주어진 Linked List 의 중간 지점을 찾고, 그 위치 부터의 Linked List 를 반환하는 문제다.\
`[1 -> 3 -> 2 -> 9 -> 4]` 에서 `[2 -> 9 -> 4]` 를 반환해야 한다.\
만약 짝수라면 중간에서 `+ 1` 한 지점에서 시작해야 한다.
<hr/>

> Slow & Fast Pointer Strategy

두 개의 포인터를 사용한다.
- **Slow 포인터**는 정상적으로 한 칸 씩 앞으로 이동한다.
- **Fast 포인터**는 두 칸 씩 앞으로 이동한다.\

Fast 포인터가 끝에 다다랐을 때 중간 지점에 다다른 Slow 포인터를 반환하면 된다.
```
function returnMid(head) {
  let slow = head;
  let fast = head;
  
  while(fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;            // fast 가 tail.next 즉, null 이 됐을 때 루프가 끝난다.
  }
  
  return slow;
}
```
