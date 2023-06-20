require("dotenv").config();
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
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
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

require("./passport")(app);

//COMMENT: cookieのセッション情報が残っているかどうかの確認
function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    console.log("認証成功");
    return next();
  } else {
    console.log("認証失敗");
    res.redirect("/auth/google");
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
    //COMMENT: cookieに情報を保存
    res.cookie("id", req.user.id, {
      secure: true,
    });
    res.cookie("name", req.user.name, {
      secure: true,
    });
    return res.redirect("http://localhost:8080/top");
  }
);

//COMMENT: それぞれのエンドポイントへ接続
app.use('/api/user', userRouter);
app.use('/api/match/in', matchInRoutes);
app.use('/api/match/before', matchBeforeRoutes);
app.use('/api/match/after', matchAfterRoutes); 

//COMMENT: catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
