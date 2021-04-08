arrName = [
  { name: 'Lisa' },
  { name: 'Bart' },
  { name: 'Maggie' },
  { name: 'Masha' },
];

function interestingMethod(arr) {
  let tempString = arr.map((i) => i.name).join(', ');
  finalString =
    tempString.substring(0, tempString.lastIndexOf(', ')) +
    '&' +
    tempString.substring(tempString.lastIndexOf(', ') + 2);
  return finalString;
}

console.log(interestingMethod(arrName));
