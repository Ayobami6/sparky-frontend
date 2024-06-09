import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    accessToken: "",
    user: "",
    activationToken: "",
    refreshToken: "",
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userRegistration: (state, action) => {
            state.activationToken = action.payload.activationToken;
        },
        userLogin: (state, action) => {
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken
        },
        userLogout: (state) => {
            state.accessToken = "";
            state.refreshToken = "";
            state.user = "";
            state.activationToken = "";
        },
        tokenRefresh: (state, action) => {
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken
        },
        loadUser: (state, action) => {
            state.user = action.payload.user;
            localStorage.setItem('user', JSON.parse(state?.user))
        }
    },
})

export const { userRegistration, userLogin, userLogout, tokenRefresh, loadUser } = authSlice.actions;
export default authSlice.reducer;