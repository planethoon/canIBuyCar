<<<<<<< HEAD
import {createAction, createReducer} from "@reduxjs/toolkit";
=======
import { createAction, createReducer } from '@reduxjs/toolkit';
>>>>>>> 1fd055c341bfda4667f470409424b9d8e74a0148

export const getInfo = createAction('userInfo/getInfo');
export const deleteInfo = createAction('userInfo/deleteInfo');

const initialState = {
  token: null,
  userId: null,
  username: null,
  bookmark: [],
};

const userInfoReducer = createReducer(initialState, (builder) => {
<<<<<<< HEAD
  builder
    .addCase(getInfo, (state, action) => ({...state, ...action.payload}))
    .addCase(deleteInfo, (state, action) => initialState);
=======
  builder.addCase(getInfo, (state, action) => ({ ...state, ...action.payload })).addCase(deleteInfo, (state, action) => initialState);
>>>>>>> 1fd055c341bfda4667f470409424b9d8e74a0148
});

// const userInfoReducer = createReducer(initialState, {
//   [getInfo]: (state, action) => ({ ...state, ...action.payload }),
//   [deleteInfo]: (state, action) => initialState,
// });

export default userInfoReducer;
