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
//条件に一致するする要素が見つからなかったら-1を返す
console.log(arrNum6_findIndex); //0

const objDoraemon = [
  {
    id: 1,
    name: "Takeshi",
    gender: "men"
  },
  {
    id: 2,
    name: "Shizuka",
    gender: "women"
  },
  {
    id: 3,
    name: "Nobita",
    gender: "men"
  }
];

const indexObDoraemon = objDoraemon.findIndex((obj) => {
  return obj.name === "Shizuka";
});

if (indexObDoraemon >= 0) {
  console.log(objDoraemon[indexObDoraemon]);
  //{id: 2, name: "Shizuka", gender: "women"}
} else {
  console.log("対象の名前は存在しません");
}

//Array.every()
//コールバック関数で処理される内容が全ての条件に一致する場合のみtrueを返す

const resultEvery = arrNum6.every((val) => {
  return val % 3 === 0;
});
//arrNum6 →　[9, 12, 15, 18] 全て条件に合うのでtrueが返る
console.log(resultEvery);

//Array.some
//コールバック関数で処理される内容が1つでも条件に一致する場合のみtrueを返す

const resultSome = arrNum6.some((val) => {
  return val % 15 === 0;
});

console.log(resultSome);

//Array.reduce()
/**
 * Array：対象となる配列
callback：配列内の各値に対して実行される関数、4つの引数を持つ
accumulator：現在処理されている要素よりも一つ前の要素かinitialValue、もしくは一つ前の要素で実行された関数の結果
currentValue：現在処理されている要素
currentIndex：現在処理されている要素のインデックス
array：対象となっている配列
initialValue：最初の実引数として渡される値

initialValueは省略可能です。
initialValueが指定されている場合、一番最初の関数実行時のaccumulatorにはinitialValueの値が入り、currentValueには配列の最初の値が入ります。
initialValueが省略されている場合は、一番最初の関数実行時のaccumulatorには配列の最初の値が入り、currentValueには配列の2番目の値が入ります。

また、callback関数の中のcurrentIndex、arrayも省略可能です。
 */

const arrNum7 = [0, 1, 2, 3];

const resultReduce = arrNum7.reduce((accumulator, currentValue) => {
  console.log("accumulator:" + accumulator + " currentValue:" + currentValue);
  return accumulator + currentValue;
});
console.log(resultReduce);
