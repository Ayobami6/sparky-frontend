import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { api } from "../api/apiSlice";
import {
  userRegistration,
  userLogin,
  tokenRefresh,
  loadUser,
} from "./authSlice";
import { apiBaseUrl } from "@/app/constants/constants";

type RegistrationResponse = {
  message: string;
  activationToken: string;
};

type RegistrationPayload = {
  email: string;
  password: string;
  name: string;
};

type ActivationPayload = {
  activationToken: string;
  activation_code: string;
};

export const authApi: any = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: apiBaseUrl,
  }),
  endpoints: (builder) => ({
    register: builder.mutation<RegistrationResponse, RegistrationPayload>({
      query: (payload) => ({
        url: "/auth/register",
        method: "POST",
        body: payload,
        // credentials: "include" as const,
      }),
      // invalidatesTags: ["user"],
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(
            userRegistration({
              activationToken: result?.data.activationToken,
            })
          );
        } catch (error: any) {
          console.log(error);
        }
      },
    }),
    activation: builder.mutation<ActivationPayload, void>({
      query: (payload) => ({
        url: `auth/verify`,
        method: "POST",
        body: payload,
      }),
    }),
    login: builder.mutation({
      query: (payload) => ({
        url: "auth/login",
        method: "POST",
        body: payload,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(
            userLogin({
              accessToken: result?.data.accessToken,
              refreshToken: result?.data.refreshToken,
              user: JSON.stringify(result.data.user),
            })
          );
        } catch (error: any) {
          console.log(error);
        }
      },
    }),
    socialAuth: builder.mutation({
      query: (payload) => ({
        url: "auth/social-auth",
        method: "POST",
        body: payload,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(
            userLogin({
              accessToken: result?.data.accessToken,
              refreshToken: result?.data.refreshToken,
              user: JSON.stringify(result?.data.user),
            })
          );
        } catch (error: any) {
          console.log(error);
        }
      },
    }),
    refreshToken: builder.mutation({
      query: (payload) => ({
        url: "auth/refresh",
        method: "POST",
        body: payload,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(
            tokenRefresh({
              accessToken: result?.data.accessToken,
              refreshToken: result?.data.refreshToken,
            })
          );
        } catch (error: any) {
          console.log(error);
        }
      },
    }),
    loadUser: builder.query({
      query: (payload) => ({
        url: "user/user-info",
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(
            loadUser({
              user: JSON.stringify(result?.data),
            })
          );
          console.log(result);
        } catch (error: any) {
          console.log(error);
        }
      },
    }),
  }),
});

export const {
  useRegisterMutation,
  useActivationMutation,
  useLoginMutation,
  useRefreshTokenMutation,
  useSocialAuthMutation,
  useLoadUserQuery,
} = authApi;
