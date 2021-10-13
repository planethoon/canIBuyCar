import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import StyledLink from "./StyledLink";
import { useHistory } from "react-router";
import { logout } from "../modules/isLogin";
import { delInfo } from "../modules/userInfo";

const NaviBar = styled.div`
  box-sizing: border-box;
  height: 7vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  /* 
  @media only screen and (min-height: 900px) {
    height: 3.5rem;
  } */
`;

const TitleText = styled.span`
  flex: 5 0 0;
  font-size: 3rem;
  margin-left: 1rem;
`;

const BtnContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex: 1 0 20;
`;

const NaviBtn = styled.li`
  border: 2px solid black;
  padding: 0.4rem;
  margin-right: 10px;
  cursor: pointer;
  color: black;
  &:hover {
    color: gainsboro;
  }
`;

export default function Navbar() {
  const { isLogin } = useSelector((state) => ({
    isLogin: state.loginReducer,
  }));
  const dispatch = useDispatch();
  const history = useHistory();

  const handleOnclick = () => {
    localStorage.clear();
    dispatch(logout());
    dispatch(delInfo());
    history.push("/");
  };
  return (
    <>
      <NaviBar>
        <TitleText>
          <StyledLink to="/main">Can I Buy Car ?</StyledLink>
        </TitleText>
        <BtnContainer>
          {isLogin ? (
            <NaviBtn onClick={handleOnclick}>Logout</NaviBtn>
          ) : (
            <StyledLink to="/login">
              <NaviBtn>Login</NaviBtn>
            </StyledLink>
          )}

          <StyledLink to="/mypage">
            <NaviBtn>Mypage</NaviBtn>
          </StyledLink>
          <StyledLink to="/board">
            <NaviBtn>Board</NaviBtn>
          </StyledLink>
        </BtnContainer>
      </NaviBar>
    </>
  );
}
