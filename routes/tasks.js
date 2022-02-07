const express = require("express");
const calculateStepUpSip = require("../controller/tasks");
const router = express.Router();

router.post("/sipstepup", calculateStepUpSip);

module.exports = router;
