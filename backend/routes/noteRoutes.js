const express = require("express");
const router = express.Router({ mergeParams: true });
const { getNotes, addNote } = require("../controlers/noteController");

const protect = require("../middleware/authMiddleware");

router.route("/").get(protect, getNotes);
router.route("/").post(protect, addNote);

module.exports = router;
