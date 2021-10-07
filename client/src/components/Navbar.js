import styled from "styled-components";
import { Link } from "react-router-dom";

const NaviBar = styled.div`
  box-sizing: border-box;
  height: 3rem;
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

const Dummy = styled.li`
  flex: 1 0 0;
  border: 1px solid black;
`;

export default function Navbar() {
  return (
    <>
      <NaviBar>
        <TitleText>
          <Link to="/main">canIBuyCar</Link>
        </TitleText>
        <BtnContainer>
          <Link to="/signin">
            <NaviBtn>Sign in</NaviBtn>
          </Link>
          <Link to="/signup">
            <NaviBtn>Sign up</NaviBtn>
          </Link>
        </BtnContainer>
      </NaviBar>
    </>
  );
}
