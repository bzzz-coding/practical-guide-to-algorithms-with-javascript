function bubbleSort(arr) {
  if (arr.length < 2) return arr
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        console.log('swap');
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
    }
  }
  return arr
}

// console.log(bubbleSort([3, 2, 5, 1, 4]))


// ===== Solution 2 with for loops =====

function swapArrItems(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

// let arr = [1, 2, 3, 4]
// console.log(swap(arr, 0, 1), arr)

// keep track of swap -- if swap remains false after a loop, it's a sign that the arr is already sorted so break out of the loop
function bubbleSort2(arr) {
  let hasSapped = false
  if (arr.length < 2) return arr
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        hasSapped = true
        console.log(`has Sapped? ${hasSapped}, i: ${i}`);
        swapArrItems(arr, j, j+1)
      }
    }
    // if entire inner loop completed without swapping, return arr
    if (hasSapped === false) {
      console.log(`breaking loop at i: ${i}`)
      return arr
    }
    // reset swap to true for next inner loop
    else {
      hasSapped = false
    }
  }
  return arr
}

let arr = [1, 2, 3, 4, 5, 6]

let arr2 = [3, 2, 4, 5, 6, 7]

console.log(bubbleSort2(arr))
console.log(bubbleSort2(arr2))

