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

const LandingText2 = styled(LandingText)`
  top: 27.5vh;
  font-size: 1.4rem;
  color: #888888;
`;

const StartBtn = styled(StyledButton)`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.1rem;
`;

export default function Landing() {
  return (
    <Background>
      <img src={landing} alt="landing" />
      <LandingText>What is your DREAM Car?</LandingText>
      <LandingText className={"korean"}>
        당신이 그리던 드림카는 무엇인가요 ?
      </LandingText>
      <LandingText2>
        {" "}
        누구나 자신이 꿈꾸던 드림카들이 있을 텐데,
        <br />
        <br /> 바로 그 드림카를 가지기 위해서 내가 언제부터 노력했어야 하는지
        현실적으로 알려드립니다!
      </LandingText2>
      <StyledLink to="/main">
        <StartBtn>시작하기</StartBtn>
      </StyledLink>
    </Background>
  );
}
