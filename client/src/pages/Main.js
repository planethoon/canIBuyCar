import Navbar from '../components/Navbar';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PageContainer = styled.div`
  background-color: grey;
  height: 100vh;
`;

const LogoContainer = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  display: flex;
  justify-content: center;
`;

const LogoWrapper = styled.ul`
  display: flex;
  justify-content: space-around;
  margin-top: 5rem;
`;

const LogoBtn = styled.li`
  border: 2px solid black;
  height: 10rem;
  width: 10rem;
`;

export default function Main() {
  return (
    <>
      <Navbar />
      <PageContainer>
        <LogoContainer>
          <LogoWrapper>
            <Link to='/'>
              <LogoBtn />
            </Link>
            <Link to='/'>
              <LogoBtn />
            </Link>
            <Link to='/'>
              <LogoBtn />
            </Link>
            <Link to='/'>
              <LogoBtn />
            </Link>
            <Link to='/'>
              <LogoBtn />
            </Link>
            <Link to='/'>
              <LogoBtn />
            </Link>
          </LogoWrapper>
          <LogoWrapper>
            <Link to='/'>
              <LogoBtn />
            </Link>
            <Link to='/'>
              <LogoBtn />
            </Link>
            <Link to='/'>
              <LogoBtn />
            </Link>
            <Link to='/'>
              <LogoBtn />
            </Link>
            <Link to='/'>
              <LogoBtn />
            </Link>
            <Link to='/'>
              <LogoBtn />
            </Link>
          </LogoWrapper>
        </LogoContainer>
      </PageContainer>
    </>
  );
}
