function memoize(fn) {
  let cache = {}
  
  return (n) => {
    console.log(Object.keys(cache))
    if (cache[n]) return cache[n]
    let result = fn(n)
    cache[n] = result
    return result
  }
}

function factorial(n) { 
  // n * (n - 1) ... * 1
  if (n === 1) return 1
  return n * memoFactorial(n-1)
}

const memoFactorial = memoize(factorial)

console.log(memoFactorial(5))
console.log(factorial(5))

console.log(memoFactorial(4))
console.log(factorial(4))
