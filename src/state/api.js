import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { json } from "react-router-dom";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://wealthgo.onrender.com/" ||
      "http://localhost:5000/" ||
      process.env.REACT_APP_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      let token = localStorage.getItem("persist:root");

      token = JSON.parse(token);
      token = token.token;
      const abc = token.slice(1, -1);
      if (token) {
        headers.set("Authorization", `Bearer ${abc}`);
      }
      return headers;
    },
  }),
  reducerPath: "adminApi",
  tagTypes: [
    "User",
    "Users",
    "Transactions",
    "Deposits",
    "Withdrawals",
    "Register",
    "Verify",
    "Login",
    "MakeDeposit",
  ],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => ({
        url: `users/${id}`,
      }),
      providesTags: ["User"],
    }),
    getUsers: build.query({
      query: (id) => ({
        url: "users/all",
      }),

      providesTags: ["Users"],
    }),
    getTransactions: build.query({
      query: (id) => ({
        url: `transactions/${id}`,
      }),
      providesTags: ["Transactions"],
    }),
    getDeposits: build.query({
      query: (id) => ({
        url: `transactions/deposit/${id}`,
      }),
      providesTags: ["Deposits"],
    }),
    getWithdrawals: build.query({
      query: (id) => ({
        url: `transactions/withdrawals/${id}`,
      }),
      providesTags: ["Withdrawals"],
    }),
    registerUser: build.mutation({
      query: (email) => ({
        url: "auth/signup",
        method: "POST",
        body: email,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Register"],
    }),
    verifyUser: build.mutation({
      query: (payload) => ({
        url: "auth/signup/verify",
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Verify"],
    }),
    loginUser: build.mutation({
      query: (payload) => ({
        url: "auth/login",
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Login"],
      async onQueryStarted(
        arg,
        { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }
      ) {},
      // The 2nd parameter is the destructured `MutationCacheLifecycleApi`
      async onCacheEntryAdded(
        arg,
        {
          dispatch,
          getState,
          extra,
          requestId,
          cacheEntryRemoved,
          cacheDataLoaded,
          getCacheEntry,
        }
      ) {},
    }),
    deposit: build.mutation({
      query: (id, amount) => ({
        url: `transactions/${id}/deposit`,
        method: "POST",
        body: amount,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["MakeDeposit"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetUsersQuery,
  useRegisterUserMutation,
  useVerifyUserMutation,
  useLoginUserMutation,
  useGetTransactionsQuery,
  useGetDepositsQuery,
  useGetWithdrawalsQuery,
  useDepositMutation,
} = api;
