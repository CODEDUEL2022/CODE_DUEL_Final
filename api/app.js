require("dotenv").config();
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const userController = require("./controllers/userController");
const userRouter = require("./routes/userRoutes");
const matchAfterRoutes = require("./routes/matchAfterRoutes");
const matchBeforeRoutes = require("./routes/matchBeforeRoutes");
const matchInRoutes = require("./routes/matchInRoutes");
const passport = require("passport");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(
  cors({
    // origin: "http://localhost:8080" ,
    origin: true,
    credentials: true,
    optionsSuccessStatus: 200,
  })
);
app.use(cookieParser());
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

require("./passport")(app);
function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    // 認証済
    console.log("認証成功");
    return next();
  } else {
    // 認証されていない
    console.log("認証失敗");
    res.redirect("/auth/google"); // ログイン画面に遷移
  }
}

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["https://www.googleapis.com/auth/userinfo.profile"],
  })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    session: true,
  }),
  function (req, res) {
    res.cookie("id", req.user.id, {
      secure: true,
    });
    res.cookie("name", req.user.name, {
      secure: true,
    });
    return res.redirect("http://localhost:8080/top");
  }
);

app.use('/api/user', userRouter);

app.use('/api/match/in', matchInRoutes);

app.use('/api/match/before', matchBeforeRoutes);

app.use('/api/match/after', matchAfterRoutes); 

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
