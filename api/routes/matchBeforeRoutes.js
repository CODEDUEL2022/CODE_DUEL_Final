const router = require("express").Router(),
matchBeforeController = require("../controllers/matchBeforeController");

router.get("/", function(req, res){
    matchBeforeController.read(req, res)
});
router.put("/:id", function(req, res){
    matchBeforeController.update(req, res)
});

router.post("/custom_match", function(req, res){
    matchBeforeController.customMatch(req, res)
});
router.get("/random_match", function(req, res){
    matchBeforeController.randomMatch(req, res)
});
router.post("/delete_room", function(req, res){
    matchBeforeController.deleteRoom(req, res)
});
router.post("/leave_user", function(req, res){
    matchBeforeController.leaveUser(req, res)
});

module.exports = router;