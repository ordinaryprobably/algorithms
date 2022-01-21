# 108. Convert Sorted Array to Binary Search Tree
Ascending Order 로 정렬된 Array 를 Binary Search Tree 로 변환하는 문제다.
1. Array 의 가운데 인덱스를 찾아서 `root node` 로 설정한다.
2. 가운데를 기준으로 왼쪽은 left sub-tree, 오른쪽은 right sub-tree 가 된다.
3. 왼쪽 Array 의 가운데 값은 왼쪽 sub-tree 의 head 가 되고, head 를 기준으로 왼쪽과 오른쪽이 동일하게 좌우 sub-tree 가 된다.
4. 이를 재귀적으로 반복하면 해결이 가능하다.
```
function sortedArrayToBST(nums) {
  if(nums.length === 0) return null;                      // Base Case
  if(nums.length === 1) return new TreeNode(nums[0]);     // Base Case
  
  const midIdx = Math.floor(nums.length / 2);
  const root = new TreeNode(nums[midIdx]);                // Array 가운데 값을 Head 로 설정해준다.
  
  const leftArray = nums.slice(0, midIdx);
  const rightArray = nums.slice(midIdx + 1, nums.length);
  
  root.left = sortedArrayToBST(leftArray);
  root.right = sortedArrayToBST(rightArray);
  
  return root;
}
```
```
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
```
아래의 링크에서 설명을 읽을 수 있다.\
https://medium.com/confessions-of-a-bootcamp-grad/how-to-solve-leetcodes-convert-sorted-array-to-binary-search-tree-problem-with-javascript-a61e6d6d6c36
