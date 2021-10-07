import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: yellow;
  display: flex;
`;

const Container = styled.div`
  margin: 3rem;
  height: 46rem;
  width: 36rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0 1 auto;
  background-color: orange;
`;

const TitleBox = styled.div`
  margin: 3rem;
  height: 12rem;
  width: 30rem;
  background-color: white;
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
  border: 0.1rem solid black;
  border-radius: 0.5rem;
  cursor: pointer;
`;

export default function Landing() {
  return (
    <Background>
      <Container>
        <TitleBox>제목</TitleBox>
        <TextBox>내용</TextBox>
        {/* <Link to=''> */}
        <StartBtn>버튼</StartBtn>
        {/* </Link> */}
      </Container>
    </Background>
  );
}
