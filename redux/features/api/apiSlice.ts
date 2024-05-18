import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "localhost:4000/v1/" }),
    endpoints: (builder) => ({

    }),
});

export const { } = api;