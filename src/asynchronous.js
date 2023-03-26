import "./styles.css";

//クラス
class User {
  constructor(name, age) {
    //このクラスから生成されるインスタンスはthisで表現できる
    this.name = name;
    this.age = age;
  }

  userAge() {
    return `${this.name}さんは${this.age}歳です`;
  }
}

const newUser = new User("Satuki", 7);
console.log(newUser);
//{name: "Satuki", age: 7, constructor: Object}
console.log(newUser.userAge());
//Satukiさんは7歳です

/**
 * Promiseはビルドインオブジェクト
 */

/**
 * 非同期処理はある処理が終わるのを待たずに次の処理を実行していくため、
 * 同時に複数の処理を実行できる
 */

//serTimeout()
const sampleCallbackFunc = () => {
  console.log("123");

  setTimeout(() => console.log("456"), 0);

  console.log("789");
};

sampleCallbackFunc();
/**
  * 結果
  * 123 789 456
  *setTimeoutの第2引数は0なので0秒後に実行だが、
  setTimeoutがコールバック関数処理を引き渡している間に次の処理が
  実行されるので789が先に出力される
  */

//setTimeout(callback,delay)
//第２引数に渡された時間が経過した所で１度だけ処理を行う

//setInterval(callback,during)
//第２引数に渡された時間間隔で繰り返し処理を実行、指定した時間が経過すると
//前回の処理が修了していなくても繰り返しの処理が始まる

//Promise
/**
 * 実行中の非同期処理を監視し、問題無く処理が完了すればresolveを
 * 問題があればrejectを通知する
 *
 * promiseオフジェクトはpending/fulfilled/rejectedの３つの状態を持つ
 *
 * pending
 * 何らかの処理を実行している状態（初期状態はこれ）
 *
 * fukfilled
 * 処理が成功して修了した状態
 * .then()を呼び出す
 *
 * rejected
 * 処理が失敗で終わった状態
 * .catch()を呼び出す
 */

//promiseコンストラクタ基本構文

const statments = (resolve, reject) => {};

const promise = new Promise((resolve, reject) => {
  resolve(console.log("Promiseコールバック関数の成功時の処理"));
});

const success = () => {
  console.log("成功しました");
};
const fail = () => {
  console.log("失敗しました");
};

promise.then(success, fail).finally(() => {
  console.log("成功・失敗に関わらず実行されます");
});

/**
    * 結果Promiseコールバック関数の成功時の処理 
      成功しました 
    */

/**
 * .thenの第一引数に成功時のコールバック関数、第２引数に失敗時のコールバック関数
 * が渡される。渡されたコールバック関数の戻り値から新たなpromiseオブジェクトが作成され、
 * 作成されたオブジェクトを返る
 * 第２引数の失敗時のコールバック関数は省略出来る
 */

// Promise関数 (1)
var promise1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("promise1成功したよ");
  }, 3000);
});

// Promise関数 (2)
var promise2 = new Promise(function (resolve, reject) {
  const sampleNum1 = 1;
  if (sampleNum1 > 0) {
    setTimeout(function () {
      resolve("promise2成功したよ");
    }, 1000);
  } else {
    reject("promise2でエラーが発生しました");
  }
});

// Promise関数 (3)
var promise3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("promise3成功したよ");
  }, 2000);
});

//promise.all
//
Promise.all([promise1, promise2, promise3])
  .then((message) => {
    // console.log( message ) ;	// [ "3秒経過", "1秒経過", "2秒経過", ]
  })
  .catch(() => {
    //all()内のいずれかで失敗したらcatchに入る
    console.log("処理に失敗しました");
  });

/**
 * Promise.race
 * 配列で指定された複数のpromiseオブジェクトのうち、最初に状態が変わったという
 * 通知を受け取ったものを実行する
 * 複数の非同期処理を並列に実行し、最初に応答があった時点での失敗
 * または成功のコールバック関数が一度だけ実行される
 */
const promiseObjects = [promise1, promise2, promise3];
Promise.race(promiseObjects)
  .then((message) => {
    console.log(`message:${message}`); //message:promise2成功したよ
    console.log("非同期処理が成功しました"); //非同期処理が成功しました
  })
  .catch(() => {
    console.log("非同期処理が失敗しました");
  });

/**
 * 「async / await」は、Promiseによる非同期処理をより簡潔に効率よく記述できる
 * 「await」は「async」で定義された関数の中だけでしか使えない
 * awaitを使うと非同期処理が完了するまで次の処理を実行しないため、
 * 同期処理のように上から下へと処理が流れる
 */

function myPromise(num) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(num * num);
    }, 3000);
  });
}

//asyncを使わない場合
// const resultMyPromise = myPromise(10);
// resultMyPromise.then((result) => {
//   console.log(result);
// })

//asyncを使う場合
async function myAsync() {
  const result = await myPromise(10);
  console.log(result);
}

myAsync();

//「then」を使わずに非同期処理を複数実行する方法
myPromise(10)
  .then(function (data) {
    console.log(data);
    return myPromise(100);
  })
  .then(function (data) {
    console.log(data);
    return myPromise(1000);
  })
  .then(function (data) {
    console.log(data);
  });
//asyncを使った場合
async function myAsyncAll() {
  console.log(await myPromise(10));
  console.log(await myPromise(100));
  console.log(await myPromise(1000));
}

myAsyncAll();

//Promise.all()を使った並列処理との違い
Promise.all([myPromise(10), myPromise(100), myPromise(1000)]).then(function (
  data
) {
  console.log(data);
});

async function myAsyncAll2() {
  const r1 = myPromise(10);
  const r2 = myPromise(100);
  const r3 = myPromise(1000);

  console.log(await r1, await r2, await r3);
}

myAsyncAll2();
/**
 * まず最初に、実行予定のPromise処理をすべて起動させて変数に格納します。
 * そのあとに「await」を付与することですべてのPromise処理を並列に
 * 動かして結果を取得することができるわけです。
 */
