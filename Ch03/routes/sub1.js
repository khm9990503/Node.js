const express = require("express");
const router = express.Router();

router.get("/get1", (req, res) => {
  const uid = req.query.uid;
  res.render("sub1/get1", { uid: uid });
});
router.get("/get2", (req, res) => {
  const name = req.query.name;
  const age = req.query.age;

  const data = {
    name: req.query.name,
    age: req.query.age,
  };
  res.render("sub1/get2", data);
});

router.get("/post1", (req, res) => {
  res.render("sub1/post1");
});

router.post("/post1Result", (req, res) => {
  const postData = req.body;
  res.render("sub1/post1Result", postData);
});

router.get("/post2", (req, res) => {
  res.render("sub1/post2");
});

router.post("/post2Result", (req, res) => {
  const postData = req.body;
  res.render("sub1/post2Result", postData);
});
module.exports = router;
