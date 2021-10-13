import { createAction, createReducer } from "@reduxjs/toolkit";

export const setInfo = createAction("userInfo/setInfo");
export const delInfo = createAction("userInfo/deleteInfo");

const initialState = {
  token: null,
  userId: null,
  userName: null,
  bookmark: [],
};

const userInfoReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setInfo, (state, action) => ({ ...state, ...action.payload }))
    .addCase(delInfo, (state, action) => initialState);
});

export default userInfoReducer;
