function reverseString(str){
return str.split("").reverse().join("");
}
console.log(reverseString("hello"));
function isEven(num){
  return num % 2===0;
}
console.log(isEven(4)); // true
console.log(isEven(7)); // false

function reverseArray(arr){
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--){
    reversed.push(arr[i];
  }
  return reversed;
}
console.log(revesearray([1,2,3,4,5]));
