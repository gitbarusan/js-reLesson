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
