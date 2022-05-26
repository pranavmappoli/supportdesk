import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import { ticketReducers } from "./ticket/ticketSlice";
import noteSliceReducer from "./notes/noteSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tickets: ticketReducers,
    notes: noteSliceReducer,
  },
});
