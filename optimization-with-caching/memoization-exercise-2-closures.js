// Task 3: Clean up your global scope by moving your cache inside your function.
// protip: Use a closure to return a function that you can call later.

const memoizedClosureTimes10 = () => {
  const cache = {};

  // return a definition of a function, not invocked 
  return (n) => {
    if (!cache[n]) {
      console.log(`not in cache, calculating result...`)
      cache[n] = n * 10
    }
    return cache[n] 
  }
};

const memoClosureTimes10 = memoizedClosureTimes10();  // memoizing the return in memoClosureTimes10
/*
memoClosureTimes10 will save what memoizedClosureTimes10() returns, which is 
(n) => {
  if (!cache[n]) cache[n] = n * 10
  return cache[n] 
}
*/

/*
whenever we call memoClosureTimes10, we are not calling the entire function of memoizedClosureTimes10, but its return function which is
(n) => {
  if (!cache[n]) cache[n] = n * 10
  return cache[n] 
}
because of how scope works, we still have reference to variables declared in the parent scope
*/

// The reason for having memoizedClosureTimes10 function is so that we can make the cache variable private, instead of a globle variable
console.log('~~~~~~~~~~~~~~TASK 3~~~~~~~~~~~~~~');
try {
  console.log('Task 3 calculated value:', memoClosureTimes10(9));	// calculated
  // when invoking memoClosureTimes10(9) again, the memoized (return definition) function gets reinitialized, but the cache from the parent function stays the same
  console.log('Task 3 cached value:', memoClosureTimes10(9));	// cached
} catch(e) {
  console.error('Task 3:', e);
}




// Another reason is that we can call memoizedClosureTimes10 again to have more than one cache, see example at the bottom
// It helps to visualize the code below in Python Tutor: https://pythontutor.com/render.html#mode=display
const memoizedClosureTimesM = (m) => {
  const cache = {};

  return (n) => {
    if (!cache[n]) {
      let result = n * m
      cache[n] = result
      return result
    }
    return cache[n] 
  }
};

const memoClosureTimes5 = memoizedClosureTimesM(5); // calling memoizedClosureTimesM(5) and stored the return (which is a fn) in memoClosureTimes5
const memoClosureTimes100 = memoizedClosureTimesM(100); 

console.log(memoClosureTimes5(10))
console.log(memoClosureTimes5(10))
console.log(memoClosureTimes100(10))
console.log(memoClosureTimes100(10))
