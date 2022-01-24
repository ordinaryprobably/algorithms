# 605. Can Place Flowers
주어진 배열을 2차원의 꽃밭이라고 생각하고, 빈 공간에 n 송이의 꽃을 심을 수 있는지 판단하는 문제다.\
배열 속의 1 은 꽃, 0 은 빈 공간이며, 꽃은 좌,우가 비어있는 위치에만 심을 수 있다.\
예를 들어, `[1, 0, 0, 0, 1]` 꽃밭에는 `[2]` 인덱스에 한 송이만 심을 수 있다.
> In-Place 로 순회하며, 좌우 인덱스가 모두 `0` 인 경우에 꽃을 심는다.\
> 만약 n 송이의 꽃을 전부 심었다면 `true` 를, 아니라면 `false` 를 반환한다.
```
function canPlaceFlowers(flowerbed, n) {
  for(let i = 0; i < flowerbed.length && n > 0; i++) {                // i 가 배열의 길이에 도달하고, n 이 0 에 도달하면 순회를 끝낸다.
    if(!flowerbed[i - 1] && !flowerbed[i] && !flowerbed[i + 1]) {     // 좌,우,중간이 모두 0 인지 확인한다.
      flowerbed[i] = 1;                                               // 맞다면 0 을 1 로 바꾸고, n 에서 1 을 뺀다.
      n--;
    }
  }
  
  return n === 0;                                                     // n 이 0 이면 true, 아니면 false 를 반환한다.
}
```
