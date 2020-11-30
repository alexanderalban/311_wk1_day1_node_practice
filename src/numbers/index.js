const isEven = (num) => {
  // write code for numbers.isEven
  if (num % 2 === 0) {
    return true;
  }
}

const sum = (arr) => {
  // write code for numbers.sum
  let arrSum = arr.reduce(function(a, b){
    return a + b;
  }, 0)

  return arrSum;
}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  for (let i in arr) {
    for (let j in arr) {
      if (i + j === sum) {
        return true
      } else {
        return false
      }
    }
  }
}

module.exports = {
  isEven,
  sum,
  comboSum
}