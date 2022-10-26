// Wrapper Function - accessing end through closures
function wrapperFnLoop(start, end) {
  function recurse(n) {
    console.log(`Wrapper looping from ${n} to ${end}`)
    if (n < end) {
      recurse(n+1)
    }
  }
  recurse(start)
}

wrapperFnLoop(1, 5)

// Memoization - passing in arugments each time the function is called
function memoFnLoop(start, end) {
  console.log(`Memo looping from ${start} to ${end}`)
  if (start < end) memoFnLoop(start+1, end)
}

memoFnLoop(1, 5)