import styled from 'styled-components';
import StyledButton from '../components/StyledButton';
import StyledDiv from '../components/StyledDiv';
import StyledLink from '../components/StyledLink';
import StyledInput from '../components/StyledInput';
import { useState } from 'react';
import axios from 'axios';

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
  background-color: white;
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
  width: 50rem;
  flex-direction: column;
`;

const InputEmailContainer = styled(StyledDiv)`
  margin: 0.8rem;
`;

const EmailBox = styled(StyledDiv)`
  height: 2rem;
  width: 3.5rem;
`;

const InputEmailBox = styled(StyledInput)``;

const InputPWContainer = styled(InputEmailContainer)``;

const PWBox = styled(EmailBox)``;

const InputPWBox = styled(StyledInput)``;

const SignupContainer = styled(StyledDiv)`
  margin: 1rem;
  height: 5rem;
  width: 40rem;
  background-color: gray;
`;

const SignupBox = styled(StyledDiv)`
  height: 2rem;
  width: 5rem;
`;

const ButtonContainer = styled(StyledDiv)``;

const LoginBtn = styled(StyledButton)``;

const SocialLoginBtn = styled(StyledButton)``;

export default function Login() {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });
  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };
  const handleLogin = () => {
    const { email, password } = loginInfo;
    axios
      .post('http://localhost:8080/auth/login', { email, password }, { withCredentials: true })
      .then((res) => {
        console.log(email, password);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Background>
      <OuterContainer>
        <InnerContainer>
          <StyledLink to='/main'>
            <TextBox>로고</TextBox>
          </StyledLink>
          <InfoBox>
            <InputEmailContainer>
              <EmailBox>Email</EmailBox>
              <InputEmailBox type='email' onChange={handleInputValue('email')} />
            </InputEmailContainer>
            <InputPWContainer>
              <PWBox>PW</PWBox>
              <InputPWBox type='password' onChange={handleInputValue('password')} />
            </InputPWContainer>
          </InfoBox>
          <SignupContainer>
            아이디가 없으신가요 ?
            <SignupBox>
              <StyledLink to='/signup'> 회원가입 </StyledLink>
            </SignupBox>
          </SignupContainer>
          <ButtonContainer>
            <LoginBtn onClick={handleLogin}>로그인</LoginBtn>
            <SocialLoginBtn>소셜 로그인</SocialLoginBtn>
          </ButtonContainer>
        </InnerContainer>
      </OuterContainer>
    </Background>
  );
}
