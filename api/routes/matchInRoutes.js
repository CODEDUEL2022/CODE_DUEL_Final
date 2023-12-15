const router = require("express").Router(),
matchInController = require("../controllers/matchInController");

router.get("/", function(req, res){
    matchInController.read(req, res)
});
router.post("/", function(req, res){
    matchInController.create(req,res)
});
router.put("/:id", function(req, res){
    matchInController.update(req, res)
});
router.delete("/:id", function(req, res){
    matchInController.delete(req, res)
});

router.post("/send_attack_info", function(req, res){
    matchInController.sendAttackInfo(req, res)
});

router.post("/draw_card", function(req, res){
    matchInController.drawCard(req, res)
});

router.post("/send_combo_data", function(req, res){
    matchInController.sendComboData(req, res);
});

module.exports = router;