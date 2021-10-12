import { createAction, createReducer } from "@reduxjs/toolkit";

export const setInfo = createAction("userInfo/setInfo");
export const deleteInfo = createAction("userInfo/deleteInfo");

const initialState = {
  token: null,
  userId: null,
  username: null,
  bookmark: [],
};

const userInfoReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setInfo, (state, action) => ({ ...state, ...action.payload }))
    .addCase(deleteInfo, (state, action) => initialState);
});

export default userInfoReducer;
