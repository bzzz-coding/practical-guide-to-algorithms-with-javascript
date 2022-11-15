function minNumOfBills(change) {
  const [lg, md, sm] = [20, 10, 5]
  let count = 0,
      result = {}

  while (change >= 5) {
    if (change >= lg) {
      change -= lg
      result[lg] ? result[lg]++ : result[lg] = 1
      count++
    } else if (change >= md) {
      change -= md
      result[md] ? result[md]++ : result[md] = 1
      count++
    } else {
      change -= sm
      result[sm] ? result[sm]++ : result[sm] = 1
      count++
    }
  }

  if (change > 0) {
    result[sm] ? result[sm]++ : result[sm] = 1
    count++
  }

  console.log(`20: ${result[20]}; 10: ${result[10]}; 5: ${result[5]}`)
  return count
}


console.log(minNumOfBills(40))
console.log(minNumOfBills2(40, [10, 20, 5]))

console.log(minNumOfBills(10))
console.log(minNumOfBills2(10, [10, 20, 5]))

console.log(minNumOfBills(55))
console.log(minNumOfBills2(55, [10, 20, 5]))

console.log(minNumOfBills(3))
console.log(minNumOfBills2(3, [10, 20, 5]))

console.log(minNumOfBills(27))
console.log(minNumOfBills2(27, [10, 20, 5]))


// ======= Cleaner Solution ==========

function minNumOfBills2(change, billValues) {
  // sort a copy of billValues in desc order
  let sortedBillValues = [...billValues].sort((a, b) => b - a)

  let count = 0,
      result = {}

  for (let i = 0; i < sortedBillValues.length; i++) {
    let currentBillValue = sortedBillValues[i]
    while(change >= currentBillValue) {
      change -= currentBillValue
      result[currentBillValue] ? result[currentBillValue]++ : result[currentBillValue] = 1
      count++
    }
  }

  if (change > 0) {
    let smallestValue = sortedBillValues[sortedBillValues.length - 1]
    result[smallestValue] ? result[smallestValue]++ : result[smallestValue] = 1
    count++
  }
  
  console.log(`lg: ${result[sortedBillValues[0]]}; md: ${result[sortedBillValues[0]]}; sm: ${result[sortedBillValues[0]]}`)
  return count
}