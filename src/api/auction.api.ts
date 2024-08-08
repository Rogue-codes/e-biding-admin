/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
import { ICreateAuctionPayload } from "../interfaces/bid.interface";

const BASE_URL = import.meta.env.VITE_APP_API_URL + "";

export const auctionApi = createApi({
  reducerPath: "auctionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      const token = Cookies.get("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Auctions"],
  endpoints: (builder) => ({
    getAuctionId: builder.query<any, any>({
      query: () => ({
        url: `/auction/gen-id`,
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
    }),
    // getAccount: builder.query<ISingleAccountResponse, { id: number }>({
    //   query: ({ id }) => ({
    //     url: `/user/${id}`,
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json; charset=UTF-8",
    //     },
    //   }),
    //   providesTags: ["Accounts"],
    // }),
    createAuction: builder.mutation<any, ICreateAuctionPayload>({
      query: (payload) => ({
        url: `/auction/create`,
        method: "POST",
        body: payload,
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Auctions"],
    }),
    // rejectAccount: builder.mutation<any, { id: number }>({
    //   query: ({ id }) => ({
    //     url: `/user/reject-user/${id}`,
    //     method: "DELETE",
    //     headers: {
    //       "Content-Type": "application/json; charset=UTF-8",
    //     },
    //   }),
    //   invalidatesTags: ["Accounts"],
    // }),
  }),
});

export const {
  useGetAuctionIdQuery,
  useCreateAuctionMutation
} = auctionApi;
