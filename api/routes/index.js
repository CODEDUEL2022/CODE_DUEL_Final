const cookieParser = require('cookie-parser');
const express = require('express');

const router = express.Router();
const userController = require("../controllers/userController");
const isAuthenticated = require("../authentication");

router.post("/user/login", function(req, res){
  userController.login(req,res)
});
router.post("/user/create_user", function(req, res, next){
  //これが動かないです。
  // console.log("成功：" + req.cookies)
  userController.createUser(req,res)
});
router.post("/user/get_user_info", function(req, res){
  userController.getUserInfo(req,res)
});
router.post("/user/delete_user", function(req, res){
  userController.deleteUser(req,res)
});

const matchBeforeRoutes = require("./matchBeforeRoutes");
router.use("/api/match/before", matchBeforeRoutes);

const matchAfterRoutes = require("./matchAfterRoutes");
router.use("/api/match/after", matchAfterRoutes);

const matchInRoutes = require("./matchInRoutes");
router.use("/api/match/in", matchInRoutes);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  console.log(req.cookies)
});

module.exports = router;