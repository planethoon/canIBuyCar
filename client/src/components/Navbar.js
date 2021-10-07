import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NaviBar = styled.div`
  box-sizing: border-box;
  height: 4vh;
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
  flex: 1 0 0;
  justify-content: space-evenly;
`;

const NaviBtn = styled.li`
  border: 2px solid black;
  flex: 1 0 0;
  padding: 0.4rem;
`;

export default function Navbar() {
  return (
    <>
      <NaviBar>
        <TitleText>
          <Link to='/main'>canIBuyCar</Link>
        </TitleText>
        <BtnContainer>
          <Link to='/signin'>
            <NaviBtn>Sign in</NaviBtn>
          </Link>
          <Link to='/signup'>
            <NaviBtn>Sign up</NaviBtn>
          </Link>
        </BtnContainer>
      </NaviBar>
    </>
  );
}
