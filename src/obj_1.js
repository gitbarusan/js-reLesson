import "./styles.css";

//プロパティ名に変数を使いたい時はブラケット記法（[]）でアクセス
const capitalCity = {
  japan: "Tokyo",
  england: "London"
};

const birthplace = "japan";

console.log(capitalCity[birthplace]); //Tokyo
console.log(capitalCity.birthplace); //undefined

//プロパティ値の追加・変更・削除
capitalCity.france = "paris";
capitalCity.japan = "chiba";
delete capitalCity.england;

console.log(capitalCity);
//{japan: "chiba", france: "paris"}

//オブジェクトのマージ
const points01 = { a: 10, b: 20 };
const points02 = { c: 30, d: 40 };
const points03 = { ...points01, ...points02 };
console.log(points03);
//{a: 10, b: 20, c: 30, d: 40}

//keyと同じ定数名を使うと、そのkeyの値が代入される（分割代入）
const { a, b, ...rest } = points03;
console.log(a); //10
console.log(b); //20
console.log(rest); //{c: 30, d: 40}

//Object.keys(obj)
//オブジェクトのキーを取り出し、配列で返す
const points03_keys = Object.keys(points03);
console.log(points03_keys);
//["a", "b", "c", "d"]

//Object.values(obj)
//オブジェクトの値を取り出し、配列で返す
const points03_vals = Object.values(points03);
console.log(points03_vals);
//[10, 20, 30, 40]

//Object.entries(obj)
//オブジェクトのキーと値を要素に持つ配列を返す
const points03_arr = Object.entries(points03);
console.log(points03_arr);
//[["a",10 ],["b",20 ],["c",30 ],["d",40 ]]

const posts = [
  {
    id: 1,
    content: "javascript",
    like: 2
  },
  {
    id: 2,
    content: "typescript",
    like: 5
  },
  {
    id: 3,
    content: "php",
    like: 45
  },
  {
    id: 4,
    content: "react",
    like: 23
  }
];

//foreachで回す
posts.forEach((post) => {
  return console.log(`言語:${post.content} ${post.like}いいね`);
});

//mapで新しい配列を作る
const arrPosts = posts.map((post) => {
  return `言語:${post.content} ${post.like}いいね`;
});
console.log(arrPosts);
//["言語:javascript 2いいね", "言語:typescript 5いいね", "言語:php 45いいね", "言語:react 23いいね"]
