const router = require("express").Router();
const userController = require("../controllers/userController");

router.get("/", function(req, res){
    userController.read(req,res)
});
router.post("/", function(req, res){
    userController.create(req,res)
});
router.put("/:id", function(req, res){
    userController.update(req,res)
});
router.delete("/:id/delete", function(req, res){
    userController.delete(req,res)
});
router.get("/user_login", function(req, res){
    userController.userLogin(req,res)
});
router.get("/get_user_info", function(req, res){
    userController.getUserInfo(req,res)
});
router.post("/delete_user", function(req, res){
    userController.deleteUser(req,res)
});

module.exports = router;