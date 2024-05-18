import { configureStore } from "@reduxjs/toolkit";
import { api } from "./features/api/apiSlice";
import { authApi } from "./features/auth/authApi";
import authSlice from "./features/auth/authSlice"


export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        [authApi.reducerPath]: authApi.reducer,
        auth: authSlice

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware).concat(authApi.middleware),
    devTools: false,
    preloadedState: {},
})