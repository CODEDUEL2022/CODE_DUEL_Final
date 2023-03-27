const express = require('express');
const router = express.Router();

const userRoutes = require("./userRoutes");
router.use("/api/user", userRoutes);

const matchBeforeRoutes = require("./matchBeforeRoutes");
router.use("/api/match/before", matchBeforeRoutes);

const matchAfterRoutes = require("./matchAfterRoutes");
router.use("/api/match/after", matchAfterRoutes);

const matchInRoutes = require("./matchInRoutes");
router.use("/api/match/in", matchInRoutes);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;