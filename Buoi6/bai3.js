// Bài 3: Chuẩn hoá các chuỗi sau
// - Không có khoảng trắng thừa ở đầu và cuối
// - Giữa các từ chỉ có 1 khoảng trắng
// - Chữ đầu của các từ viết hoa
// - Không có bất kì kí tự nào là số

const case1 = "    hOang Bui   ";
const case2 = " hOANG      BUI   hOang     ";
const case3 = "23traN    dUOng23     ";

const change = (str) => {
  str = str.toLowerCase();
  str = str.match(/[a-zA-Z]+/g);
  str = str.map((word) => {
    word = word.split("");
    word = word.map((char, index) => {
      return (index === 0) ? char.toUpperCase() : char;
    });
    word = word.join("");
    return word;
  });
  str = str.join(" ");
  console.log(str);
}

change(case2);


