import { createAction, createReducer } from "@reduxjs/toolkit";

export const getInfo = createAction("brand/getInfo");
export const deleteInfo = createAction("brand/deleteInfo");

const initialState = {
  carList: [],
};

const brandReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getInfo, (state, action) => ({ ...state, ...action.payload }))
    .addCase(deleteInfo, (state, action) => initialState);
});

export default brandReducer;
