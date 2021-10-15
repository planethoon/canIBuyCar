import { combineReducers } from "redux";

import userInfoReducer from "./userInfo";
import loginReducer from "./isLogin";
import brandReducer from "./brand";
import carInfoReducer from "./carInfo";

const rootReducer = combineReducers({
  userInfoReducer,
  loginReducer,
  carInfoReducer,
  brandReducer,
});

export default rootReducer;
