import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    accessToken: "",
    user: null,
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
            state.user = null;
            state.activationToken = "";
        }
    },
})

export const { userRegistration, userLogin, userLogout } = authSlice.actions;
export default authSlice.reducer;