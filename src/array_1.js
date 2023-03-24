import "./styles.css";

//配列の検索
const arr1 = ["red", "yellow", "green", "red"];
console.log(arr1.indexOf("yellow"));
//1 redなら0 見つからなかったら-1
console.log(arr1.includes("red"));
//includesだとtrue/falseで結果が返る

//要素数取得
console.log(arr1.length); //4

//配列→文字列に変換
console.log(arr1.toString());
//red,yellow,green,red

//指定文字列で連結
console.log(arr1.join(" - "));
//red - yellow - green - red

// 配列の展開
const arr11 = [1, 2];

const sumFunc = (num1, num2) => console.log(num1 + num2);
//  sumFunc(arr1[0],arr1[1]); 3
//　スプレッド構文で上記と同じ処理が出来る
sumFunc(...arr11);

// まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arry3] = arr2;
console.log(num1); //1
console.log(num2); //2
console.log(arry3); //[3,4,5]

// 配列のコピー、結合
const arry4 = [10, 20];
const arry5 = [30, 40];

//arry4のコピーをarr6に設定
const arr6 = [...arry4];
console.log(arr6); //[10.20]

//結合
const arr7 = [...arry4, ...arry5];
console.log(arr7); //[10,20,30,40]
//同じ　[10,20,30,40]
console.log(arry4.concat(arry5));

//スプレッド構文を使わない代入の違い
const arr8 = arry4;
arr8[0] = 100;
//arry4とarr8が同じ変数を参照してしまう
console.log(arr8); //[100,20]
console.log(arry4); //[100,20]

//スプレッド構文の場合元の配列は影響を受けない
arr6[0] = 100;
console.log(arr6); //[100,20]
console.log(arry4); //[10,20]

//配列の並べ替え
const arrStr1 = ["e", "c", "d", "b", "a"];
console.log(arrStr1.sort());
//["a", "b", "c", "d", "e"]
console.log(arrStr1);
//["a", "b", "c", "d", "e"] 元の配列も書き換わる

// function compareFunction(a,b) {
//   return a-b
// }

const arrNum1 = [1, 2000, 14, 100, 30];
// console.log(arrNum1.sort());
//[1, 100, 14, 2000, 30]] 文字列でソートされる

// console.log(arrNum1.sort(compareFunction));
//比較関数を使う事で数値でソートされる
//[1, 14, 30, 100, 2000]

//元の配列を変更したくない場合は、スプレット構文を使う
console.log([...arrNum1].sort());
// [1, 100, 14, 2000, 30]
console.log(arrNum1);
//[1, 2000, 14, 100, 30]

//降順で並び替え
// console.log(arrStr1.reverse());
// ["e", "d", "c", "b", "a"]

//配列要素の削除

//実行前確認
console.log(arrStr1);
//["a", "b", "c", "d", "e"]

//最後の要素を削除
arrStr1.pop();
console.log(arrStr1);
// ["a", "b", "c", "d"]

//最初の要素を削除
arrStr1.shift();
// console.log(arrStr1);
//["b", "c", "d"]

//指定した要素を削除
//spliceの引数を1つだけ指定した場合、引数より最後までの要素が削除される
// arrStr1.splice(1);
// console.log(arrStr1);　//["b"]

//spliceの引数を2つ指定した場合、第2引数の数分第一引数の要素から削除される
// arrStr1.splice(1,1);
// console.log(arrStr1);　//["b", "d"]

//spliceの引数を3つ指定した場合、第3引数の値が追加される
arrStr1.splice(1, 1, "X");
console.log(arrStr1); //["b", "X", "d"]
//配列の追加
const arrStr2 = ["田中", "山田", "鈴木"];

//最後に追加
arrStr2.push("安田");
console.log(arrStr2); //["田中", "山田", "鈴木", "安田"]

arrStr2.unshift("太田");
console.log(arrStr2); //["太田", "田中", "山田", "鈴木", "安田"]
