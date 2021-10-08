import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OuterContainer = styled.div`
  height: 50rem;
  width: 90rem;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerContainer = styled.div`
  height: 40rem;
  width: 80rem;
  background-color: yellow;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoginTextBox = styled.div`
  margin: 1rem;
  height: 5rem;
  width: 40rem;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IDPWBox = styled.div`
  margin: 1rem;
  height: 10rem;
  width: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const InputIDContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;
`;

const IDBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 3rem;
`;

const InputIDBox = styled.input`
  font-size: 1.5rem;
  height: 3rem;
  width: 35rem;
`;

const InputPWContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;
`;

const PWBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 3rem;
`;

const InputPWBox = styled.input`
  font-size: 1.5rem;
  height: 3rem;
  width: 35rem;
`;

const SignupContainer = styled.div`
  margin: 1rem;
  height: 5rem;
  width: 40rem;
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SignupBox = styled.div`
  height: 2rem;
  width: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const LoginBtn = styled.button`
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  width: 15rem;
  border: 0.1rem solid white;
  border-radius: 0.5rem;
  cursor: pointer;
  color: black;
  &:hover {
    color: white;
  }
`;

const SocialLoginBtn = styled.button`
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  width: 15rem;
  border: 0.1rem solid white;
  border-radius: 0.5rem;
  cursor: pointer;
  color: black;
  &:hover {
    color: white;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: black;
  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  &:hover {
    color: white;
  }
`;

export default function Login() {
  return (
    <Background>
      <OuterContainer>
        <InnerContainer>
          <LoginTextBox>로그인</LoginTextBox>
          <IDPWBox>
            <InputIDContainer>
              <IDBox>ID</IDBox>
              <InputIDBox />
            </InputIDContainer>
            <InputPWContainer>
              <PWBox>PW</PWBox>
              <InputPWBox />
            </InputPWContainer>
          </IDPWBox>
          <SignupContainer>
            아이디가 없으신가요 ?
            <SignupBox>
              <StyledLink to='/signup'> 회원가입 </StyledLink>
            </SignupBox>
          </SignupContainer>
          <ButtonContainer>
            <LoginBtn>로그인</LoginBtn>
            <SocialLoginBtn>소셜 로그인</SocialLoginBtn>
          </ButtonContainer>
        </InnerContainer>
      </OuterContainer>
    </Background>
  );
}
