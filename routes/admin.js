var express = require("express");
var router = express.Router();
var dotenv = require("dotenv");

dotenv.config();

const adminMIddleware = require("../middleware/admin.middleware");
const adminStore = require("../store/admin.store");

const title = process.env.PROJECT_TITLE;

router.get("/list", adminMIddleware, function (req, res, next) {
  res.render("admin/list", {
    title: title,
    title_ko: "관리자 계정 목록",
    path: "admin",
    adminList: adminStore.getAdmins(),
  });
});

router.get("/create", adminMIddleware, function (req, res, next) {
  res.render("admin/create", {
    title: title,
    title_ko: "관리자 계정 생성",
    path: "admin",
  });
});

router.post("/create", adminMIddleware, function (req, res, next) {
  //TODO : admin 계정 저장 프로세스
  // admin_name: test3
  // dept_name: test3
  // used_yn_code: N
  // pwd1: 1234
  // pwd2: 1234
  // email: extoredkom@gmail.com
  // telephone: 01012341234

  if (req.body.pwd1 !== req.body.pwd2) {
    res.send(
      `<script>alert('변경할 비밀번호 입력과 비밀번호 재입력이 일치하지 않습니다.');history.back();</script>`
    );
  }

  let admin = {
    admin_member_id: adminStore.adminDB.length + 1,
    company_code: 1,
    admin_id: req.body.admin_id,
    admin_password: req.body.pwd1,
    admin_name: req.body.admin_name,
    email: req.body.email,
    telephone: req.body.telephone,
    dept_name: req.body.dept_name,
    used_yn_code: req.body.used_yn_code,
    reg_user_id: 1,
    edit_user_id: 1,
    edit_date: new Date(Date.now()).toLocaleString(),
    reg_date: new Date(Date.now()).toLocaleString(),
  };

  adminStore.adminDB.push(admin);

  res.redirect("/admin/list");
});

router.get("/modify", adminMIddleware, function (req, res, next) {
  let adminInfo = adminStore.getAdminById(req.query.admin_id);

  console.log(adminInfo);

  res.render("admin/modify", {
    title: title,
    title_ko: "관리자 계정 정보 수정",
    path: "admin",
    adminInfo: adminInfo,
  });
});

router.post("/modify", adminMIddleware, function (req, res, next) {
  //TODO : admin 계정 수정 프로세스
  //admin_member_id: 1
  //admin_name: 관리자1
  //dept_name: 개발팀
  //pwd1: 123
  //pwd2: 123
  //used_yn_code: N
  //email: admin1@gmail.com
  //telephone: 010-1234-5678

  if (req.body.pwd1 !== req.body.pwd2) {
    res.send(
      `<script>alert('변경할 비밀번호 입력과 비밀번호 재입력이 일치하지 않습니다.');history.back();</script>`
    );
  }

  let adminIdx = adminStore.adminDB.findIndex(
    (admin) => admin.admin_member_id === parseInt(req.body.admin_member_id)
  );

  adminStore.adminDB[adminIdx].admin_name = req.body.admin_name;
  adminStore.adminDB[adminIdx].dept_name = req.body.dept_name;
  adminStore.adminDB[adminIdx].used_yn_code = req.body.used_yn_code;
  adminStore.adminDB[adminIdx].email = req.body.email;
  adminStore.adminDB[adminIdx].telephone = req.body.telephone;

  if (req.body.pwd1 !== "") {
    adminStore.adminDB[adminIdx].admin_password = req.body.pwd1;
  }

  res.redirect("/admin/list");
});

router.get("/delete", adminMIddleware, function (req, res, next) {
  //TODO : admin 계정 삭제 프로세스

  let adminIdx = adminStore.adminDB.findIndex(
    (admin) => admin.admin_member_id === parseInt(req.query.admin_id)
  );

  adminStore.adminDB.splice(adminIdx, 1);

  res.redirect("/admin/list");
});

module.exports = router;
