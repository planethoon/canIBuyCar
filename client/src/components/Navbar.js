import styled from "styled-components";
import StyledLink from "./StyledLink";

const NaviBar = styled.div`
  box-sizing: border-box;
  height: 7vh;
  background-color: skyblue;
  display: flex;
  flex-direction: row;
  align-items: center;
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
  return (
    <>
      <NaviBar>
        <TitleText>
          <StyledLink to="/main">canIBuyCar</StyledLink>
        </TitleText>
        <BtnContainer>
          <StyledLink to="/signin">
            <NaviBtn>Sign In</NaviBtn>
          </StyledLink>
          <StyledLink to="/mypage">
            <NaviBtn>Mypage</NaviBtn>
          </StyledLink>
          <StyledLink to="/request">
            <NaviBtn>Request</NaviBtn>
          </StyledLink>
        </BtnContainer>
      </NaviBar>
    </>
  );
}
