const router = require("express").Router();
const homeControllers = require("../controllers/home");

router.get("/home/addPrizeToDatabase/:collection/:prizeId", homeControllers.addPrizeToDatabase);

module.exports = router;
