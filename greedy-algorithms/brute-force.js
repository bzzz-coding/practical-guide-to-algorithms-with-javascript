function minChange1(total, values, count) { // [1, 6, 10]
  if (total === 0) {
    return count
  }

  count++ 

  let possibleRemainders = []
  for (let value of values) {
    if (total >= value) {
      possibleRemainders.push(total - value)
    }
  }

  return Math.min(...possibleRemainders.map(remainder => minChange(remainder, values, count)))
}



function minChange2(total, values) { // [1, 6, 10]
  if (total === 0) {
    return 0
  }

  let possibleRemainders = []
  for (let value of values) {
    if (total >= value) {
      possibleRemainders.push(total - value)
    }
  }

  return 1 + Math.min(...possibleRemainders.map(remainder => minChange(remainder, values)))
}

function minChange(total, values) { // [1, 6, 10]
  if (total < 0) {
    return Infinity
  }

  if (total === 0) {
    return 0
  }

  return 1 + Math.min(...values.map(value => minChange(total-value, values)))
}

console.log(minChange(12, [1, 6, 10]))
console.log(minChange(13, [1, 6, 10]))
console.log(minChange(18, [1, 6, 10]))
console.log(minChange(20, [1, 6, 10]))
console.log(minChange(0, [1, 6, 10]))
console.log(minChange(7, [1, 6, 10]))