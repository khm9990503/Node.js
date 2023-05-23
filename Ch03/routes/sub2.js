const express = require("express");
const router = express.Router();

router.get("/cookie", (req, res) => {
  const user = {
    uid: "a101",
    name: "홍쿠키",
    hp: "010-1111-1111",
    age: 19,
  };

  // 쿠키 전송
  res.cookie("user", user);

  res.render("sub2/cookie");
});

router.get("/cookieResult", (req, res) => {
  const user = req.cookies.user;
  res.render("sub2/cookieResult", user);
});

router.get("/cookieClear", (req, res) => {
  const cookieName = "user";
  const cookieValue = req.cookies[cookieName];

  if (cookieValue) {
    res.cookie(cookieName, cookieValue, { maxAge: 0 });
    res.send("Cookie cleared");
  } else {
    res.send("No cookie found");
  }
});

router.get("/session", (req, res) => {
  const user = {
    uid: "a101",
    name: "홍세션",
    hp: "010-1111-1111",
    age: 19,
  };

  // 사용자 세션 설정
  req.session.user = user;

  res.render("sub2/session");
});

router.get("/sessionResult", (req, res) => {
  const user = req.session.user;
  res.render("sub2/sessionResult", user);
});

router.get("/sessionClear", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Failed to clear session:", err);
      res.send("Failed to clear session");
    } else {
      res.clearCookie("connect.sid");
      res.send("Session cleared");
    }
  });
});

module.exports = router;
