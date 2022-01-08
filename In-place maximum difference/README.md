# 121. Best Time to Buy and Sell Stock
주어진 배열 [7,1,5,3,6,4] 의 인덱스를 날짜로 치고, 언제 사서 언제 팔아야 가장 큰 차익을 얻을 수 있는지 맞추는 문제.\
단순히 O(n^2) 알고리즘으로 구현할 수 있지만, 시간 초과가 나서 안된다.\
그래서 O(n) 의 In-Place 로직을 만들어야 한다.
```
function maxProfit(prices) {
  let minPrice = Infinity;
  let max = 0;
  
  for(let price of prices) {
    minPrice = Math.min(price, minPrice);         // 배열을 순회하면서 가장 작은 수를 minPrice 에 할당한다.
    max = Math.max((price - minPrice), max);      // 현재 순회중인 배열 값에서 minPrice 를 뺀 차익을 max 에 할당할지 비교한다.
  }
  
  return max;
};
```
