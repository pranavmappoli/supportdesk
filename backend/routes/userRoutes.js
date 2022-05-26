express = require("express");
const protect = require("../middleware/authMiddleware");

router = express.Router();
const {
  userReg,
  userLogin,
  crntUser,
} = require("../controlers/userControlers");

router.post("/", userReg);

router.post("/login", userLogin);
router.get("/crnt-user", protect, crntUser);
module.exports = router;
