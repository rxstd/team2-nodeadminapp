var express = require("express");
var router = express.Router();
var dotenv = require("dotenv");

dotenv.config();

const adminMIddleware = require("../middleware/admin.middleware");
const adminStore = require("../store/admin.store");

const title = process.env.PROJECT_TITLE;

// -routes\index.js - 공통기능 제공(관리자 사이트 로그인/메인-대시보드)
// ㄴrouter.get('/login'),views\login.ejs - 로그인 웹페이지 요청 및 응답
// ㄴrouter.post('/login') -로그인 처리 요청 및 응답,로그인 완료 후 메인 페이지 이동처리
// ㄴrouter.get('/'),views\index.ejs - 로그인 후 접속할 메인 페이지 요청 및 응답

router.get("/login", function (req, res, next) {
  res.render("login", { title: title, title_ko: "로그인", path: "login" });
});

router.post("/login", function (req, res, next) {
  //TODO : 관리자 로그인 프로세스 - 완료
  let admin_username = req.body.admin_username;
  let admin_password = req.body.admin_password;

  console.log(admin_username, admin_password);

  let admin = adminStore.authAdmin(admin_username, admin_password);

  if (admin) {
    req.session.admin_id = admin.id;
    res.redirect("/");
  } else {
    res.send(
      `<script>alert('로그인에 실패했습니다.');history.back();</script>`
    );
  }

  res.redirect("/");
});

router.get("/", adminMIddleware, function (req, res, next) {
  res.render("index", { title: title, title_ko: "대시보드", path: "index" });
});

module.exports = router;
