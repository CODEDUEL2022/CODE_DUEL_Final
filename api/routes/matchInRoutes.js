const router = require("express").Router(),
matchInController = require("../controllers/matchInController");

router.get("/", matchInController.read);
router.post("/", matchInController.create);
router.put("/:id", matchInController.update);
router.delete("/:id", matchInController.delete);

router.post("/send_attack_info", matchInController.sendAttackInfo);

module.exports = router;