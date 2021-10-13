import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

// export const setInfo = createAction("brand/setInfo");
// export const deleteInfo = createAction("brand/deleteInfo");

const initialState = [];

// const brandReducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(setInfo, (state, action) => [...action.payload])
//     .addCase(deleteInfo, (state, action) => initialState);
// });

// export default brandReducer;

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
