import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
export interface userState {
  user: {
    username: string | null;
    email: string | null;
    token: string;
  } | null;
}

const initialState: userState = {
  user:
    (Cookies.get("user") && JSON.parse(JSON.stringify(Cookies.get("user")))) ||
    null,
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<userState>) => {
      state.user = action.payload.user;
      Cookies.set("user", JSON.stringify(action.payload.user));
    },
    logout: (state) => {
      state.user = null;
      Cookies.remove("user");
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
