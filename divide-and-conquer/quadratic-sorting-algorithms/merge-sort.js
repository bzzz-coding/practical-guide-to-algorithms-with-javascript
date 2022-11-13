function merge(sortedArr1, sortedArr2) {
  let result = []
  let i = 0, j = 0
  while (i < sortedArr1.length && j < sortedArr2.length) {
    if (sortedArr1[i] < sortedArr2[j]) {
      result.push(sortedArr1[i])
      i++
    } else {
      result.push(sortedArr2[j])
      j++
    }
  }

  result = [...result, ...sortedArr1.slice(i), ...sortedArr2.slice(j)]
  
  return result
}

console.log(merge([1], [2]))
console.log(merge([1, 2, 3, 4], [5, 6]))
console.log(merge([1, 3, 7, 8], [2, 4, 5, 6]))

function mergeSort(arr) {
  if (arr.length <= 1) {return arr}

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid)
  let right = arr.slice(mid)

  return merge(mergeSort(left), mergeSort(right))
}

console.log(mergeSort([2, 49, 8, 3, 1]))
