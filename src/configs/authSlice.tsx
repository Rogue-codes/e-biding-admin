/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IAdmin } from "../interfaces/admin.interface";
import Cookies from "js-cookie";

export interface IInitialState {
  isAuthenticated: boolean;
  admin: IAdmin | null;
}

const token = Cookies.get("token"); 
const user = localStorage.getItem("@EBD");
const initialState: IInitialState = {
  isAuthenticated: token ? true : false,
  admin: user ? JSON.parse(user!) : null,
};

export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (
      state,
      action: PayloadAction<{ data: IAdmin; access_token: string }>
    ) => {
      state.admin = action.payload.data;
      state.isAuthenticated = !!action.payload.access_token;

      Cookies.set("token", action.payload.access_token, { expires: 7 });
      localStorage.setItem("@EBD", JSON.stringify(state.admin));
    },
  },
});

export const { loginUser } = userSlice.actions;

export default userSlice.reducer;
