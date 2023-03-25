import "./styles.css";

const arrStr3 = [[1, 2], [3, [4, 5]], 6];
console.log(arrStr3);
/**
 * (3) [Array(2), Array(2), 6]
0: Array(2)
  0: 1
  1: 2
1: Array(2)
  0: 3
  1: Array(2)
      0: 4
      1: 5
2: 6
 */
//引数を指定しないと1階層のみフラット化
// console.log(arrStr3.flat());
/**
 * 0: 1
1: 2
2: 3
3: Array(2)
0: 4
1: 5
4: 6
 */
console.log(arrStr3.flat(Infinity));
//[1, 2, 3, 4, 5, 6]

//分割代入
const arrStr4 = ["東京", "千葉", "神奈川", "さいたま", "群馬"];
//配列の場合第１引数に0番目の要素、第２引数に1番目の要素が入る
//残りの要素はスプレット構文で配列にまとめられる
const [Tokyo, Chiba, Kanagawa, ...cities] = arrStr4;
console.log(Tokyo); //東京
console.log(Chiba); //千葉
console.log(Kanagawa); //神奈川
console.log(cities); //["さいたま", "群馬"]

const arrNum2 = [2, 4, 6, 8];

arrNum2.forEach((val, i) => {
  console.log("val:" + val);
  console.log("index:" + i);
});
/**
 * val:2 index:0
 * val:4 index:1
 * val:6 index:2
 * val:8 index:3
 */

const arrNum3 = arrNum2.map((val) => {
  return val * val;
});
console.log(arrNum3);
//[4, 16, 36, 64]

//元の配列は影響を受けない
console.log(arrNum2);
//[2, 4, 6, 8]

const arrNum4 = [3, 5, 7, 9, 15];

//コールバック関数で順番に処理をして条件に合うもの戻り値から新たな配列を作る
const arrNum5 = arrNum4.filter((val) => {
  return val % 3 === 0;
});
console.log(arrNum5);
//[3, 9, 15]

const arrNum6 = [9, 12, 15, 18];
const arrNum6_find = arrNum6.find((val) => {
  return val % 3 === 0;
});
console.log(arrNum6_find); //9
//条件に一致する要素を見つけた時点で処理は停止

const arrNum6_findIndex = arrNum6.findIndex((val) => {
  return val % 3 === 0;
});
console.log(arrNum6_findIndex); //0
