const cookieParser = require("cookie-parser");
const express = require("express");

const router = express.Router();
const userController = require("../controllers/userController");
const isAuthenticated = require("../authentication");

module.exports = function (app) {
  app.post("/api/user/login", function (req, res) {
    console.log(req.cookies);
    userController.login(req, res);
  });
  app.get("/api/user/create_user", function (req, res) {
    userController.createUser(req, res);
  });
  app.post("/api/user/get_user_info", function (req, res) {
    userController.getUserInfo(req, res);
  });
  app.post("/api/user/delete_user", function (req, res) {
    userController.deleteUser(req, res);
  });
};

// const matchBeforeRoutes = require("./matchBeforeRoutes");
// router.use("/api/match/before", matchBeforeRoutes);

// const matchAfterRoutes = require("./matchAfterRoutes");
// router.use("/api/match/after", matchAfterRoutes);

// const matchInRoutes = require("./matchInRoutes");
// router.use("/api/match/in", matchInRoutes);

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
//   console.log(req.cookies)
// });

// module.exports = router;
