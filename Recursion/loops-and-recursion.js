// Factorial
// loop: 
function factorialLoop(num) {
  let result = 1
  for (let i = 1; i <= num; i++) {
    result *= i
  }
  return result
}
console.log(`for loop result: ${factorialLoop(1)}, ${factorialLoop(2)}, ${factorialLoop(3)}, ${factorialLoop(4)}, ${factorialLoop(5)}`)

// recursion:
function factorial(num) {
  if (num === 1) return num
  return num * factorial(num - 1)
}
console.log(`recursive fn result: ${factorial(1)}, ${factorial(2)}, ${factorial(3)}, ${factorial(4)}, ${factorial(5)}`)


// Logging index from start to end
// loop:
function logIndexLoop(start, end) {
  for (let i = start; i <= end; i++) {
    console.log(`Current index is: ${i}`)
  }
}
console.log(`for loop result: ${logIndexLoop(1, 5)}`)

// recursion:
function logIndex(start, end) {
  if (start === end) {
    console.log(`Current index is: ${end}`)
    return
  }
  console.log(`Current index is: ${start}`)
  logIndex(start+1, end)
}
console.log(`recursive fn result: ${logIndex(1, 5)}`)

// recursive fn from the course:
function logIndexRecursively(start, end) {
  function recurs(i) {
    console.log(`Current index is: ${i}`)
    if (i < end) {   
      recurs(i+1)
    }
  }
  recurs(start)
}
console.log(`Course example recursion: ${logIndexRecursively(1, 5)}`)