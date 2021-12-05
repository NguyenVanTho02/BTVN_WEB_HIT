str1 = "tranduong";
// -> 0
str2 = "hitclubhiuhiu";
// -> 2
str3 = "aabb";
// -> -1


const handle = (str) => {
  let storage = {};
  for (let value of str) {
    storage[value] = storage[value] ? storage[value] + 1 : 1;
  }

  for (let i in str) {
    if (storage[str[i]] === 1) {
      return i;
    }
  }
  return -1;
}

console.log(handle(str3));
  



