import { configureStore } from "@reduxjs/toolkit";
import { api } from "./features/api/apiSlice";
import { authApi } from "./features/auth/authApi";


export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        [authApi.reducerPath]: authApi.reducer

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware).concat(authApi.middleware),
    devTools: false,
    preloadedState: {},
})