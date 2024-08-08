import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { userSlice } from "./authSlice";
import { authApi } from "../api/auth.api";
import { accountsApi } from "../api/accounts.api";
import { auctionApi } from "../api/auction.api";

export const store = configureStore({
  reducer: {
    // add any feature reducer here]
    [authApi.reducerPath]: authApi.reducer,
    [accountsApi.reducerPath]: accountsApi.reducer,
    [auctionApi.reducerPath]: auctionApi.reducer,
    auth: userSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(accountsApi.middleware)
      .concat(auctionApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
