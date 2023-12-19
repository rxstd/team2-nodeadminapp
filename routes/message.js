var express = require("express");
var router = express.Router();

/* 
-routes\message.js - 채팅 메시지 이력 정보관리 라우팅 기능 제공
ㄴrouter.get('/list'),views\message\list.ejs
ㄴrouter.get('/create'),views\message\create.ejs
ㄴrouter.post('/create'),목록페이지 이동처리 
ㄴrouter.get('/modify'),views\message\modify.ejs
ㄴrouter.post('/modify'),목록페이지 이동처리
ㄴrouter.get('/delete'),목록페이지 이동처리
*/
router.get("/", function (req, res, next) {
  res.render("message/dashboard");
});

router.get("/list", function (req, res, next) {
  res.render("message/list", {
    schOption: { title: "", isDisplay: "", boardTypeCode: "" },
  });
});

router.post("/list", function (req, res, next) {
  res.render("message/list", {
    schOption: {
      title: req.body.boardTypeCode,
      isDisplay: req.body.title,
      boardTypeCode: req.body.isDisplay,
    },
  });
});

router.get("/create", function (req, res, next) {
  res.render("message/create");
});

router.post("/create", function (req, res, next) {
  res.redirect("/message/list");
});

router.get("/modify", function (req, res, next) {
  res.render("message/modify");
});

router.post("/modify", function (req, res, next) {
  res.redirect("/message/list");
});

router.get("/delete", function (req, res, next) {
  res.redirect("/message/list");
});

module.exports = router;
