const array = [1, 2, 3, 4, 5];

function calculateAverage() {
  var i = 0;
  let sum = 0;
  let average = 0;
  while (i < array.length) {
      sum += array[i];
      i++;
    }
  average = sum / (array.length);
  return average;
}

console.log(calculateAverage(array));
