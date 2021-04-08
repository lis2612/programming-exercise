arr = [20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5];

// function findOdd(A) {
//   let el = 0;
//   do {
//     count = A.sort().slice(el, (el = A.lastIndexOf(A[el]) + 1)).length;
//   } while (!(count % 2));
//   return A[el - 1];
// }

const findOdd = (xs) => xs.reduce((a, b) => a ^ b);



console.log(findOdd(arr));
// return A[el-1]+' = ' + count;
