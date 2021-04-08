string = '1 2 -3 4 5';

function highAndLow(numbers) {
  arr = numbers.split(' ').map((a) => parseInt(a));
  return Math.max.apply(null, arr) + ' ' + Math.min.apply(null, arr);
}
console.log(highAndLow(string));
