import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {login,adminSignup,adminLogin} from "../reducer/auth"

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: '',
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: "/api/user/login",
        method: "POST",
        body,
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          if (data.code === 200) dispatch(login(data.data));
          throw data;
        } catch (error) {
          console.error(error);
        }
      },
    }),
    adminSignup: builder.mutation({
      query: (body) => ({
        url: "/api/company/signup",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginMutation, useAdminSignupMutation } = authApi;
