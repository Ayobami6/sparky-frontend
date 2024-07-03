import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { apiBaseUrl as baseUrl } from "../../../app/constants/constants";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    refreshToken: builder.query({
      query: (data) => ({
        url: "auth/refresh",
        method: "POST",
        // credentials: "include" as const,
      }),
    }),
  }),
});

// export const { useRefreshToken } = api;
