import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
interface User {
  username: string | null;
  email: string | null;
  token: string;
  image?: string | null;
}
export interface userState {
  user: User | undefined;
}
const initialState: userState = {
  user: Cookies.get("user") ? JSON.parse(Cookies.get("user") as any) : null,
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<userState>) => {
      state.user = action.payload.user;
    },
    logout: (state) => {
      console.log("runnning");
      state.user = undefined;
      Cookies.remove("user");
    },
    changeUserCredentials: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, changeUserCredentials } = authSlice.actions;

export default authSlice.reducer;
