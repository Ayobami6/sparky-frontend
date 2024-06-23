import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  route: "Login",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    setClose: (state, action) => {
      state.open = action.payload;
    },
    setRoute: (state, action) => {
      state.route = action.payload;
    },
  },
});

export const { setOpen, setClose, setRoute } = modalSlice.actions;

export default modalSlice.reducer;
