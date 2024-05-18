import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { api } from "../api/apiSlice";
import { userRegistration } from "./authSlice";

type RegistrationResponse = {
    message: string
    activationToken: string;
}

type RegistrationPayload = {
    email: string;
    password: string;
    name: string;
}

type ActivationPayload = {
    activationToken: string;
    activation_code: string;
}

export const authApi: any = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/v1/" }),
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
                    dispatch(userRegistration({
                        activationToken: result?.data.activationToken
                    }));
                } catch (error: any) {
                    console.log(error);

                }
            }
        }),
        activation: builder.mutation<ActivationPayload, void>({
            query: (payload) => ({
                url: `auth/verify`,
                method: "POST",
                body: payload,
            }),

        })
    })
});

export const { useRegisterMutation, useActivationMutation } = authApi