import { useHistory } from "react-router";
import styled from "styled-components";
import StyledButton from "../components/StyledButton";
import StyledDiv from "../components/StyledDiv";

const Background = styled(StyledDiv)`
  height: 100vh;
  width: 100vw;
`;

const OuterContainer = styled(StyledDiv)`
  height: 55rem;
  width: 100rem;
  background-color: black;
`;

const InnerContainer = styled(StyledDiv)`
  height: 50rem;
  width: 45rem;
  flex-direction: column;
  background-color: gainsboro;
`;

const TextBox = styled(StyledDiv)`
  margin: 1rem;
  height: 5rem;
  width: 40rem;
  background-color: gray;
`;

const InfoBox = styled(StyledDiv)`
  margin: 1rem;
  height: 10rem;
  width: 30rem;
  flex-direction: column;
`;

const InputContainer = styled(StyledDiv)`
  align-items: flex-start;
  flex-direction: column;
`;

const Box = styled(StyledDiv)`
  height: 2rem;
`;

export default function SignupComplete({ signupClear }) {
  const history = useHistory();
  const goLogin = () => {
    history.push("/login");
    signupClear();
  };
  return (
    <Background>
      <OuterContainer>
        <InnerContainer>
          <TextBox>로고</TextBox>
          <InfoBox>
            <InputContainer>
              <Box>회원가입을 축하드립니다 !</Box>
            </InputContainer>
          </InfoBox>
          <StyledDiv>
            <StyledButton onClick={goLogin}>로그인</StyledButton>
          </StyledDiv>
        </InnerContainer>
      </OuterContainer>
    </Background>
  );
}
