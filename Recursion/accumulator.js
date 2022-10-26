function joinElements(array, joinString) {
  // ^ wrapper function

  function recurse(idx, currentStr) {
    // set an accumulator that updates current value
    let newStr = currentStr + array[idx]

    // if condition met, return value
    if (idx === array.length - 1) return newStr

    // else, call self and pass in updated arguments
    return recurse(idx+1, newStr+joinString)
  }

  // invoke recurse for the first time
  return recurse(0, '')
}

console.log(joinElements(['s','cr','t cod', ' :) :)'], 'e'))