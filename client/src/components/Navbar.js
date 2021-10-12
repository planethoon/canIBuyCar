import styled from "styled-components";

import { useSelector } from "react-redux";

import StyledLink from "./StyledLink";

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
  font-size: 2rem;
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
`;

export default function Navbar() {
  const isLogin = useSelector((state) => state.loginReducer);
  return (
    <>
      <NaviBar>
        <TitleText>
          <StyledLink to="/main">canIBuyCar</StyledLink>
        </TitleText>
        <BtnContainer>
          {isLogin ? (
            <StyledLink to="/logout">
              <NaviBtn>Logout</NaviBtn>
            </StyledLink>
          ) : (
            <StyledLink to="/login">
              <NaviBtn>Login</NaviBtn>
            </StyledLink>
          )}

          <StyledLink to="/mypage">
            <NaviBtn>Mypage</NaviBtn>
          </StyledLink>
          <StyledLink to="/comments">
            <NaviBtn>Comments</NaviBtn>
          </StyledLink>
        </BtnContainer>
      </NaviBar>
    </>
  );
}
