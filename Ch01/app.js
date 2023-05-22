/**
 *
 * 날짜 : 2023/05/22
 * 이름 : 구홍모
 * 내용 : hello Node.js 실습
 *
 */

const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const path = url.parse(req.url, true).pathname;

  if (path == "/") {
    res.end("Hello World!");
  }
  if (path == "/hello") {
    res.end("Hello Node.js");
  }
  if (path == "/welcome") {
    res.end("Welcome Node.js");
  }
  if (path == "/greeting") {
    res.end("Greeting Node.js");
  }
  //res.write("hello Node.js");
  //res.end();
});

server.listen(3000, () => {
  console.log("app 실행...");
});
