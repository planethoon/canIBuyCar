import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: black;
  display: flex;
  align-items: center;
`;

const DummyContainer = styled.div`
  flex: 5 1 auto;
`;

const Container = styled.div`
  margin: 3rem;
  height: 46rem;
  width: 36rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 auto;
  background-color: rgba(219, 219, 219, 0.4);
`;

const TitleBox = styled.div`
  margin: 3rem;
  height: 12rem;
  width: 30rem;
  background-color: white;
  opacity: 1;
`;

const TextBox = styled.div`
  margin: 3rem;
  margin-top: 0rem;
  height: 20rem;
  width: 30rem;
  background-color: pink;
`;

const StartBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  width: 8rem;
  border: 0.1rem solid white;
  border-radius: 0.5rem;
  cursor: pointer;
  color: white;
  &:hover {
    color: black;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export default function Landing() {
  return (
    <Background>
      <DummyContainer />
      <Container>
        <TitleBox>제목</TitleBox>
        <TextBox>내용</TextBox>
        <StyledLink to='/main'>
          <StartBtn>시작하기</StartBtn>
        </StyledLink>
      </Container>
    </Background>
  );
}
