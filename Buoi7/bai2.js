// Câu 2: Cộng một đơn vị vào mảng số nguyên
// Input: digits = [1,2,3]
// Output: [1,2,4]
 
// Input: digits = [0]
// Output: [1]
 
// Input: digits = [9]
// Output: [1,0]

const handle = (arr) => {
  arr = arr.join('');
  arr = Number(arr);
  arr = arr + 1;
  arr = String(arr);
  arr = arr.split("");
  let newArr = [];
  for(let i of arr) {
    newArr.push(parseInt(i));
  }
  return newArr;
}


const digits = [1,2,3]
console.log(handle(digits));

const digits2 = [0]
console.log(handle(digits2));

const digits3 = [9]
console.log(handle(digits3));