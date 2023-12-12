var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var gownRouter = require("./routes/gown");
var evansRouter = require("./routes/evans");
var welcomeRouter = require("./routes/welcome");

// 2023 - 12 - 12 Admin Webpage Integration Start
var adminRouter = require("./routes/admin"); // 작업자 - 추원혁

var memberRouter = require("./routes/member"); // 작업자 - 한고운
var articleRouter = require("./routes/article"); // 작업자 - 한고운

var channelRouter = require("./routes/channel"); // 작업자 - 이환영
var messageRouter = require("./routes/message"); // 작업자 - 이환영

// 2023 - 12 - 12 Admin Webpage Integration End

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

app.use("/welcome", welcomeRouter);
app.use("/gown", gownRouter);
app.use("/evans", evansRouter);

// 2023 - 12 - 12 Admin Webpage Integration Start

app.use("/admin", adminRouter); // 작업자 - 추원혁

app.use("/member", memberRouter); // 작업자 - 한고운
app.use("/article", articleRouter); // 작업자 - 한고운

app.use("/channel", channelRouter); // 작업자 - 이환영
app.use("/message", messageRouter); // 작업자 - 이환영

// 2023 - 12 - 12 Admin Webpage Integration End

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
