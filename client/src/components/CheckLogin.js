import { useDispatch } from "react-redux";

import { login } from "../modules/isLogin";
import { setInfo as setUserInfo } from "../modules/userInfo";

export function CheckLogin() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  if (token) {
    dispatch(login());
    dispatch(setUserInfo({ token }));
  }
}
