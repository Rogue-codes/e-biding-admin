/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/v1/e-biding",
    // prepareHeaders: (headers) => {
    //   const token = localStorage.getItem("@sterling_core_token");
    //   if (token) {
    //     headers.set("Authorization", `Bearer ${token}`);
    //   }
    //   return headers;
    // },
  }),
  tagTypes: ["auth"],
  endpoints: (builder) => ({
    login: builder.mutation<any, {
        email:string;
        password: string;
    }>({
      query: (payload) => {
        return {
          url: `/auth/admin/login`,
          method: "POST",
          body: payload,
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        };
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
