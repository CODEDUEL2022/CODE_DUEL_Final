const router = require("express").Router(),
matchAfterController = require("../controllers/matchAfterController");

router.get("/", function(req, res){
    matchAfterController.read(req, res)
});
router.post("/", function(req, res){
    matchAfterController.create(req, res)
});
router.put("/:id", function(req, res){
    matchAfterController.update(req, res)
});
router.delete("/:id",function(req, res){
    matchAfterController.delete(req, res)
});

router.post("/send_result", function(req, res){
    matchAfterController.sendResult(req, res)
});

module.exports = router;