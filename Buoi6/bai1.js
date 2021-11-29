const nums = [1, 3, 5, 7, 1, 2, 3, 4, 5, 6];
const nums1 = [1, 1, 1, 10, 23, 2, 26, 26];
const nums2 = [1000, 2000, 1000, 2000, 10000, 22222];

const count = (numbers) => {
  let a = [], b = [];
  numbers.sort();
  numbers.forEach((number) => {
    if(!a.includes(number)) {
      a.push(number);
      b.push(1);
    } else {
      b[a.length - 1]++;
    }
  }); 
  return [a, b];
};

let number = count(nums2)[0];
let counts = count(nums2)[1];

for (let i in number) {
  console.log(`Số ${number[i]} xuất hiện ${counts[i]} lần`);
}





