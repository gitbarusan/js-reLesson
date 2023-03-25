import "./styles.css";

//スプレット構文
// const name = "じゃけぇ";
// const age = 28;
//私の名前はじゃけぇです。年齢は28歳です。
//従来
// const message1= "私の名前は"　+ name + "です。年齢は"　+ age + "です。";
// console.log(message1);

//テンプレート文字列
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

const myProfile = {
  name: "はるこ",
  age: 41
};

//name,ageというconstが別で宣言されているとエラーになる
//オブジェクトの分割代入
const { name, age } = myProfile;
const message4 = `名前は${name}です。年齢は${age}です。`;
console.log(message4);

//配列の分割代入
const myProfile2 = ["じゃけぇ", 28];
const message5 = `名前は${myProfile2[0]}です。年齢は${myProfile2[1]}です。`;
console.log(message5);

//配列の場合第１引数に0番目の要素、第２引数に1番目の要素が入る
const [namae2, age2] = myProfile2;
const message6 = `名前は${namae2}です。年齢は${age2}です。`;
console.log(message6);

// ||の本当の意味
// || は左側がfalseなら右側を返す
const num2 = 100;
const fee = num2 || "金額未設定です";
console.log(fee);

// &&の本当の意味
// && は左側がtrueなら右側を返す
const num3 = 100;
const fee2 = num3 && "何か設定されました";
console.log(fee2);

//for文
for (let i = 0; i < 3; i++) {
  console.log(`${i}回目のループです`);
}

//オブジェクトの繰り返し処理
//for...in 処理順は順番不定
let user = {
  user_name: "Mai",
  user_age: 18,
  user_hobby: "camp"
};

//キー取得
// for(let key in user) {
//   console.log(key)
// }
/**
 * user_name 
   user_age 
   user_hobby 
 */
//値を取得
for (let key in user) {
  console.log(user[key]);
}
/**
 * May 
   18 
   camp 
 */

let items = ["aaa", "bbb", "ccc"];

for (let item of items) {
  console.log(item);
}
/**
 * aaa 
  bbb 
  ccc 
 */
