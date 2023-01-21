const router = require("express").Router(),
userController = require("../controllers/userController");

router.get("/", userController.read);
router.post("/", userController.create);
router.put("/:id", userController.update);
router.delete("/:id", userController.delete);

router.post("/login", userController.searchUser);
router.post("/create_user", userController.createUser);
router.post("/get_user_info", userController.getUserInfo);
router.post("/delete_user", userController.DeleteUser);
module.exports = router;