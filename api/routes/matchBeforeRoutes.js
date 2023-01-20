const router = require("express").Router(),
matchBeforeController = require("../controllers/matchBeforeController");

router.get("/", matchBeforeController.read);
router.post("/", matchBeforeController.create);
router.put("/:id", matchBeforeController.update);
router.delete("/:id", matchBeforeController.delete);

router.post("/custom_match", matchBeforeController.customMatch);
router.post("/random_match", matchBeforeController.randomMatch);
router.post("/delete_room", matchBeforeController.deleteRoom);
router.post("/leave_user", matchBeforeController.leaveUser);

module.exports = router;