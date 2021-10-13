import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const brandSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {
    setBrand(state, { payload }) {
      return [...payload];
    },
    delBrand(state, { payload }) {
      return initialState;
    },
  },
});

export const { setBrand, delBrand } = brandSlice.actions;
export const selectBrand = ({ brand }) => brand;
export default brandSlice.reducer;
