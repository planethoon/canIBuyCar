import styled from "styled-components";
import StyledLink from "../components/StyledLink";
import StyledButton from "../components/StyledButton";
import StyledDiv from "../components/StyledDiv";
import landing from "../img/landing.jpg";

const Background = styled(StyledDiv)`
  height: 100vh;
  position: relative;
  z-index: 0;

  > img {
    position: absolute;
    z-index: -1;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const LandingText = styled.div`
  font-family: "Nanum Myeongjo", serif;
  position: absolute;
  top: 10vh;
  left: 10rem;
  margin: 1rem;
  padding: 1rem;
  font-size: 4rem;
  color: #fafafa;
  &.korean {
    top: 17vh;
  }
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
  background-color: #fafafa;
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
      <img src={landing} alt="landing" />
      <LandingText>What is your DREAM Car?</LandingText>
      <LandingText className={"korean"}>
        당신이 그리던 드림카는 무엇인가요 ?
      </LandingText>
      <DummyContainer />
      <Container>
        <TitleBox>Title</TitleBox>
        <TextBox>내용</TextBox>
        <StyledLink to="/main">
          <StartBtn>시작하기</StartBtn>
        </StyledLink>
      </Container>
    </Background>
  );
}
