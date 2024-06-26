import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi: any = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://impressed-birdie-sparkytech-76064b97.koyeb.app/v1/",
  }),
  endpoints: (builder) => ({
    updateAvatar: builder.mutation({
      query: (payload) => ({
        url: "user/change-avatar",
        method: "PUT",
        body: payload,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),
    }),
  }),
});

export const { useUpdateAvatarMutation } = userApi;
