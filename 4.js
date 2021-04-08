arrName = [
  { name: 'Lisa' },
  { name: 'Bart' },
  { name: 'Maggie' },
  { name: 'Masha' },
];

function interestingMethod(arr) {
  let finalString = '';
  for (const i in arr) {
    finalString += arr[i].name;
    if (i < arr.length - 2) finalString += ', ';
    else if (i == arr.length - 2) finalString += '&';
  }
  return finalString;
}

console.log(interestingMethod(arrName));
