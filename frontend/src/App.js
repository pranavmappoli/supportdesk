import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Register from "./routes/Register";
import Login from "./routes/Login";
import Header from "./components/Header";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import CreateTicket from "./routes/CreateTicket";
import ViewTickets from "./routes/ViewTickets";
import ViewTicket from "./routes/ViewTicket";

function App() {
  return (
    <>
      <Header />
      <div className="page-container">
        <Routes>
          <Route path="/supportdesk" element={<Home />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/new-ticket" element={<ProtectedRoutes />}>
            <Route path="/new-ticket" element={<CreateTicket />}></Route>
          </Route>
          <Route path="/tickets" element={<ProtectedRoutes />}>
            <Route path="/tickets" element={<ViewTickets />}></Route>
          </Route>
          <Route path="/ticket/:ticketId" element={<ProtectedRoutes />}>
            <Route path="/ticket/:ticketId" element={<ViewTicket />}></Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
