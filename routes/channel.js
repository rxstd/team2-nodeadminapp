var express = require("express");
var router = express.Router();

/* 
-routes\channel.js - 채팅방 정보관리 라우팅 기능 제공
ㄴrouter.get('/list'),views\channel\list.ejs
ㄴrouter.get('/create'),views\channel\create.ejs
ㄴrouter.post('/create'),목록페이지 이동처리 
ㄴrouter.get('/modify'),views\channel\modify.ejs
ㄴrouter.post('/modify'),목록페이지 이동처리
ㄴrouter.get('/delete'),목록페이지 이동처리 
*/
router.get("/", function (req, res, next) {
  res.render("channel/dashboard");
});

router.get("/list", function (req, res, next) {
  res.render("channel/list", {
    schOption: { title: "", isDisplay: "", boardTypeCode: "" },
  });
});

router.post("/list", function (req, res, next) {
  res.render("channel/list", {
    schOption: {
      title: req.body.boardTypeCode,
      isDisplay: req.body.title,
      boardTypeCode: req.body.isDisplay,
    },
  });
});

router.get("/create", function (req, res, next) {
  res.render("channel/create");
});

router.post("/create", function (req, res, next) {
  res.redirect("/channel/list");
});

router.get("/modify", function (req, res, next) {
  res.render("channel/modify");
});

router.post("/modify", function (req, res, next) {
  res.redirect("/channel/list");
});

router.get("/delete", function (req, res, next) {
  res.redirect("/channel/list");
});

module.exports = router;
