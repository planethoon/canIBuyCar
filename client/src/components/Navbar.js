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
  background-color: black;
  border-bottom: 1px solid;
  border-image: linear-gradient(to right, black, gainsboro, black);
  border-image-slice: 1;
`;

const TitleText = styled.span`
  flex: 4 0 0;
  font-size: 2rem;
  margin: 0.8rem;
  margin-left: 5rem;

  > a {
    font-family: "Nanum Myeongjo", serif;

    color: gainsboro;
    transition: 0.3s;
    border-bottom: 6px solid black;

    &:hover {
      transition: 0.2s;
      border-bottom: 2px solid gainsboro;
    }
  }
`;

const BtnContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex: 1 0 20;
  justify-content: space-evenly;
  margin-right: 3rem;
`;

const NaviBtn = styled.li`
  font-family: "Nanum Myeongjo", serif;

  font-size: 1.3rem;
  border-bottom: 5px solid black;
  padding: 0.4rem;
  margin: 0.8rem;
  cursor: pointer;
  color: gainsboro;
  transition: 0.3s;

  &:hover {
    transition: 0.2s;
    border-bottom: 1px solid gainsboro;
  }
`;

const LinkWrapper = styled.div``;

export default function Navbar() {
  const { isLogin } = useSelector((state) => ({
    isLogin: state.loginReducer,
  }));
  const dispatch = useDispatch();

  const handleOnclick = () => {
    localStorage.clear();
    dispatch(logout());
    dispatch(delInfo());
  };
  return (
    <>
      <NaviBar>
        <TitleText>
          <StyledLink to="/main">CanIBuyCar</StyledLink>
        </TitleText>
        <BtnContainer>
          {isLogin ? (
            <StyledLink exact to="/">
              <NaviBtn onClick={handleOnclick}>Logout</NaviBtn>
            </StyledLink>
          ) : (
            <LinkWrapper>
              <StyledLink to="/login">
                <NaviBtn>Login</NaviBtn>
              </StyledLink>
            </LinkWrapper>
          )}
          <LinkWrapper>
            <StyledLink to="/mypage">
              <NaviBtn>Mypage</NaviBtn>
            </StyledLink>
          </LinkWrapper>
          <LinkWrapper>
            <StyledLink to="/board">
              <NaviBtn>Board</NaviBtn>
            </StyledLink>
          </LinkWrapper>
        </BtnContainer>
      </NaviBar>
    </>
  );
}
