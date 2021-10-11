import { createAction, createReducer } from "@reduxjs/toolkit";

export const getInfo = createAction("userInfo/getInfo");
export const deleteInfo = createAction("userInfo/deleteInfo");

const initialState = {
  token: null,
  userId: null,
  bookmark: [],
};

const userInfoReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getInfo, (state, action) => ({ ...state, ...action.payload }))
    .addCase(deleteInfo, (state, action) => initialState);
});

// const userInfoReducer = createReducer(initialState, {
//   [getInfo]: (state, action) => ({ ...state, ...action.payload }),
//   [deleteInfo]: (state, action) => initialState,
// });

export default userInfoReducer;
