import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import appointmentsSlice from "./slices/appointmentsSlice";
import messagesSlice from "./slices/messagesSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    appointment: appointmentsSlice,
    messages: messagesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
