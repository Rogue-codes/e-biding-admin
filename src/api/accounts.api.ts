/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
import { IAccountResponse, ISingleAccountResponse } from "../interfaces/account.interface";

const BASE_URL = import.meta.env.VITE_APP_API_URL + "";

export const accountsApi = createApi({
  reducerPath: "accountsApi",
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
  tagTypes: ["Accounts"],
  endpoints: (builder) => ({
    getAccounts: builder.query<
      IAccountResponse,
      { search: string; limit?: number; page: number; filter: boolean; startDate:string; endDate:string }
    >({
      query: ({ search, limit, page, filter, startDate, endDate }) => ({
        url: `/user/all?search=${search}&page=${page}&limit=${limit}&filter=${
          filter ? "active" : null
        }&startDate=${startDate}&endDate=${endDate}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      providesTags: ["Accounts"],
    }),
    getAccount: builder.query<ISingleAccountResponse, { id: number }>({
      query: ({ id }) => ({
        url: `/user/${id}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      providesTags: ["Accounts"],
    }),
    approveAccount: builder.mutation<any, { id: number }>({
      query: ({ id }) => ({
        url: `/user/approve-user/${id}`,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Accounts"],
    }),
    rejectAccount: builder.mutation<any, { id: number }>({
      query: ({ id }) => ({
        url: `/user/reject-user/${id}`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Accounts"],
    }),
  }),
});

export const { useGetAccountsQuery,useGetAccountQuery,useApproveAccountMutation,useRejectAccountMutation } = accountsApi;