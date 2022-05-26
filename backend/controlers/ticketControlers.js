const asyncHandler = require("express-async-handler");
const Ticket = require("../model/ticketModel");

const User = require("../model/userModel");

//@des: createticket
//@methoad: post
//@url: tickets/create-tickets
const createTicket = asyncHandler(async (req, res) => {
  const { product, description } = req.body;

  if (!product || !description) {
    res.status(401);
    throw new Error("Add both product and description");
  }

  //value of req.user is getting from Auth middleware

  const ticket = await Ticket.create({
    user: req.user.id,
    product: product,
    description: description,
    status: "new",
  });
  res.status(201).json(ticket);
});

//@des: see  tickets list
//@methoad: get
//@url: tickets/view-tickets
const viewTickets = asyncHandler(async (req, res) => {
  const tickets = await Ticket.find({ user: req.user.id });
  res.status(201).json(tickets);
});

//@des: see single ticket
//@methoad: get
//@url: tickets/view-ticket/:id
const viewTicket = asyncHandler(async (req, res) => {
  const ticket = await Ticket.findById(req.params.id);
  if (!ticket) {
    res.status(401);
    throw new Error("No Ticket found");
  }
  if (ticket.user.toString() != req.user.id) {
    res.status(400);
    throw new Error("Not Authorized");
  }
  res.status(201).json(ticket);
});
//@des: Update ticket
//@methoad: PUT
//@url: tickets/view-ticket/:id
const updateTicket = asyncHandler(async (req, res) => {
  const ticket = await Ticket.findById(req.params.id);
  if (!ticket) {
    res.status(401);
    throw new Error("No Ticket found");
  }
  if (ticket.user.toString() != req.user.id) {
    res.status(400);
    throw new Error("Not Authorized");
  }
  const { product, description } = req.body;

  const upadatedTicket = await Ticket.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(201).json(upadatedTicket);
});

//@des: Delete ticket
//@methoad: delete
//@url: tickets/view-ticket/:id
const deleteTicket = asyncHandler(async (req, res) => {
  const ticket = await Ticket.findById(req.params.id);
  if (!ticket) {
    res.status(401);
    throw new Error("No Ticket found");
  }
  if (ticket.user.toString() != req.user.id) {
    res.status(400);
    throw new Error("Not Authorized");
  }
  await ticket.remove();
  res.status(201).json({ message: "Ticket has been removed" });
});
module.exports = {
  createTicket,
  viewTickets,
  viewTicket,
  updateTicket,
  deleteTicket,
};
