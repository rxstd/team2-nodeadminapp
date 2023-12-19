var express = require("express");
var router = express.Router();

/* 
-routes\article.js - 게시글 정보관리 라우팅 기능 제공
ㄴrouter.get('/list'),views\article\list.ejs
ㄴrouter.get('/create'),views\article\create.ejs
ㄴrouter.post('/create'),목록페이지 이동처리 
ㄴrouter.get('/modify'),views\article\modify.ejs
ㄴrouter.post('/modify'),목록페이지 이동처리
ㄴrouter.get('/delete'),목록페이지 이동처리 
*/
router.get("/", function (req, res, next) {
  res.render("article/dashboard");
});

router.get("/list", function (req, res, next) {
  res.render("article/list", {
    schOption: { title: "", isDisplay: "", boardTypeCode: "" },
  });
});

router.post("/list", function (req, res, next) {
  res.render("article/list", {
    schOption: {
      title: req.body.boardTypeCode,
      isDisplay: req.body.title,
      boardTypeCode: req.body.isDisplay,
    },
  });
});

router.get("/create", function (req, res, next) {
  res.render("article/create");
});

router.post("/create", function (req, res, next) {
  res.redirect("/article/list");
});

router.get("/modify", function (req, res, next) {
  res.render("article/modify");
});

router.post("/modify", function (req, res, next) {
  res.redirect("/article/list");
});

router.get("/delete", function (req, res, next) {
  res.redirect("/article/list");
});

module.exports = router;
