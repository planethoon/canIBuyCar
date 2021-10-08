import styled from 'styled-components';
import StyledLink from '../components/StyledLink';
import StyledButton from '../components/StyledButton';
import StyledDiv from '../components/StyledDiv';

const Background = styled(StyledDiv)`
  height: 100vh;
  width: 100vw;
  background-color: black;
`;

const DummyContainer = styled.div`
  flex: 5 1 auto;
`;

const Container = styled(StyledDiv)`
  margin: 3rem;
  height: 50rem;
  width: 36rem;
  flex: 1 1 auto;
  flex-direction: column;
  background-color: rgba(219, 219, 219, 0.4);
`;

const TitleBox = styled(StyledDiv)`
  margin: 3rem;
  height: 12rem;
  width: 30rem;
  background-color: white;
  opacity: 1;
`;

const TextBox = styled(StyledDiv)`
  margin: 3rem;
  margin-top: 0rem;
  height: 20rem;
  width: 30rem;
  background-color: pink;
`;

const StartBtn = styled(StyledButton)``;

export default function Landing() {
  return (
    <Background>
      <DummyContainer />
      <Container>
        <TitleBox>Title</TitleBox>
        <TextBox>내용</TextBox>
        <StyledLink to='/main'>
          <StartBtn>시작하기</StartBtn>
        </StyledLink>
      </Container>
    </Background>
  );
}
