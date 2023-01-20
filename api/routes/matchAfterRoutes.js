const router = require("express").Router(),
matchAfterController = require("../controllers/matchAfterController");

router.get("/", matchAfterController.read);
router.post("/", matchAfterController.create);
router.put("/:id", matchAfterController.update);
router.delete("/:id", matchAfterController.delete);

router.post("/send_result", matchAfterController.sendResult);

module.exports = router;