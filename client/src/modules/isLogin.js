import { createAction, createReducer } from "@reduxjs/toolkit";

export const login = createAction("isLogin/login");
export const logout = createAction("isLogin/logout");

const loginReducer = createReducer(false, (builder) => {
  builder
    .addCase(login, (state, action) => true)
    .addCase(logout, (state, action) => false);
});

export default loginReducer;
