import { createAction, createReducer } from "@reduxjs/toolkit";

export const setInfo = createAction("brand/setInfo");
export const deleteInfo = createAction("brand/deleteInfo");

const initialState = [];

const brandReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setInfo, (state, action) => [...action.payload])
    .addCase(deleteInfo, (state, action) => initialState);
});

export default brandReducer;
