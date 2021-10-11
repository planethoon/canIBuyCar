import {createAction, createReducer} from "@reduxjs/toolkit";

export const getInfo = createAction("brand/getInfo");
export const deleteInfo = createAction("brand/deleteInfo");

const initialState = [];

const brandReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getInfo, (state, action) => [...action.payload])
    .addCase(deleteInfo, (state, action) => initialState);
});

export default brandReducer;
