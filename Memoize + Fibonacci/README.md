# LeetCode 70. Climbing Stairs
피보나치 수열을 구현하면 되는 문제지만, 시간 제한이 있기 때문에 Memoization 을 사용해야 한다.
### 메모아이즈 없이 피보나치 구현
```
function fibonacci(n) {
  let a = 0;
  let b = 1;

  for (let i = 0; i < n; i++) {
    [a, b] = [b, a + b];
  }
  
  return b;
};

/* 이런 식으로 재귀 없이 빠른 구현이 가능하다.
[0, 1] [1, 1]
[1, 1] [1, 2]
[1, 2] [2, 3]
[2, 3] [3, 5]
[3, 5] [5, 8]
[5, 8] [8, 13]
*/
```

### 메모아이즈를 사용한 피보나치 코드
```
function fibo(n, memo = {}) {
  if(n in memo) return memo[n];

  if(n === 1) return 1;
  if(n === 2) return 2;

  memo[n] = fibo(n - 1, memo) + fibo(n - 2, memo);

  return memo[n];
}
```
재귀를 사용했음에도 첫 번째 코드보다 훨씬 빠르다.
