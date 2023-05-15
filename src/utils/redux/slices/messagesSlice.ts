import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface MessagesState {
  messages: Message[] | [];
}
const initialState: MessagesState = {
  messages: [],
};

export const messages = createSlice({
  name: "user",
  initialState,
  reducers: {
    setMessages: (state, action: PayloadAction<Message[]>) => {
      state.messages = action.payload;
    },
  },
});

export const { setMessages } = messages.actions;

export default messages.reducer;
