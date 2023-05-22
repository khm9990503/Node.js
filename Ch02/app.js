/**
 *
 * 날짜 : 2023/05/22
 * 이름 : 구홍모
 * 내용 : Express 실습
 *
 */
const express = require("express");
const app = express();

// template Engine 설정
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

// router
app.get("/", (req, res) => {
  //res.send("Ch02 APP ...");

  const data = {
    tit1: "Node.js Express",
    tit2: "EJS Template Engine",
    result1: true,
    result2: false,
    score: 86,
    user: {
      uid: "a101",
      name: "홍길동",
      hp: "010-0000-0000",
      age: 24,
    },
    users: [
      { uid: "p101", name: "김유신", hp: "010-1234-1001", age: 20 },
      { uid: "p102", name: "김춘추", hp: "010-1234-1002", age: 21 },
      { uid: "p103", name: "장보고", hp: "010-1234-1003", age: 22 },
      { uid: "p104", name: "강감찬", hp: "010-1234-1004", age: 23 },
      { uid: "p105", name: "이순신", hp: "010-1234-1005", age: 24 },
    ],
  };

  res.render("index", data); // 확장자 필요없음, 참조할 데이터
});

app.get("/sub/hello", (req, res) => {
  res.render("sub/hello");
});

app.get("/sub/welcome", (req, res) => {
  res.render("sub/welcome");
});

app.get("/sub/greeting", (req, res) => {
  res.render("sub/greeting");
});

app.listen(3000, () => {
  console.log("3000 port로 실행 중...");
});
