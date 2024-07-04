import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiBaseUrl } from "@/app/constants/constants";

export const courseApi: any = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: apiBaseUrl,
  }),
  endpoints: (builder) => ({
    createCourse: builder.mutation({
      query: (payload) => ({
        url: "/course",
        method: "POST",
        body: payload,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),
    }),
  }),
});

export const { useCreateCourseMutation } = courseApi;
