express = require("express");
const protect = require("../middleware/authMiddleware");

router = express.Router();
const {
  createTicket,
  viewTickets,
  viewTicket,
  updateTicket,
  deleteTicket,
} = require("../controlers/ticketControlers");

// Re-route into note router
router.use("/view-tickets/:ticketId/notes", require("./noteRoutes"));

router.post("/create-ticket", protect, createTicket);
router.get("/view-tickets", protect, viewTickets);
router.get("/view-tickets/:id", protect, viewTicket);
router.put("/view-tickets/:id", protect, updateTicket);
router.delete("/view-tickets/:id", protect, deleteTicket);
module.exports = router;
