// function isSame(arr1, arr2) {
//   if (Array.isArray(arr1) === false || Array.isArray(arr2) === false) {
//     return false;
//   }
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i] || typeof arr1[i] !== typeof arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// }
// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 3];
// const res = isSame(arr1, arr2);

function isSame(arr1, arr2) {
  if (Array.isArray(arr1) === false || Array.isArray(arr2) === false) {
    return "Invalid";
  }
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i] || typeof arr1[i] !== typeof arr2[i]) {
      return false;
    }
  }
  return true;
}
const arr1 = [2, 5, 6];
const arr2 = 256;
const res = isSame(arr1, arr2);
console.log(res);
