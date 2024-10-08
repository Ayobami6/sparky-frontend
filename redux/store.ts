"use client";
import { configureStore } from "@reduxjs/toolkit";
import { api } from "./features/api/apiSlice";
import { authApi } from "./features/auth/authApi";
import authSlice from "./features/auth/authSlice";
import modalSlice from "./features/modal/modalSlice";
import { userApi } from "./features/user/userApi";
import { courseApi } from "./features/course/courseApi";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [courseApi.reducerPath]: courseApi.reducer,
    auth: authSlice,
    modal: modalSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(api.middleware)
      .concat(authApi.middleware)
      .concat(userApi.middleware)
      .concat(courseApi.middleware),
  devTools: false,
  preloadedState: {},
});

const initializeApp = async () => {
  const refreshToken = localStorage.getItem("refreshToken");
  console.log(refreshToken);
  await store.dispatch(
    authApi.endpoints.refreshToken.initiate(
      { refreshToken },
      { forceRefetch: true }
    )
  );
  await store.dispatch(
    authApi.endpoints.loadUser.initiate({}, { forceRefetch: true })
  );
};

initializeApp();
