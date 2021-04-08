arr = [
  [3, 12],
  [55, 1],
  [91, -2],
  [54, 23],
];

// function openOrSenior(data) {
//   let result = [];
//   for (member of data) {
//     if (member[0] >= 55 && member[1] > 7) result.push('Senior');
//     else result.push('Open');
//   }
//   return result;
// }

function openOrSenior(data) {
  return data.map(([age, handicap]) =>
    age > 54 && handicap > 7 ? 'Senior' : 'Open'
  );
}

console.log(openOrSenior(arr));
