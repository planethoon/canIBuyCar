import { createAction, createReducer } from "@reduxjs/toolkit";

export const setInfo = createAction("carInfo/setInfo");
export const deleteInfo = createAction("carInfo/deleteInfo");

const initialState = {
  id: null,
  brand: null,
  name: null,
  type: null,
  price: null,
  img: null,
};

const carInfoReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setInfo, (state, action) => ({ ...state, ...action.payload }))
    .addCase(deleteInfo, (state, action) => initialState);
});

export default carInfoReducer;
