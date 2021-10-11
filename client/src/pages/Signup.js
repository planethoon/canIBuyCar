import styled from 'styled-components';
import StyledButton from '../components/StyledButton';
import StyledDiv from '../components/StyledDiv';
import StyledInput from '../components/StyledInput';
import StyledLink from '../components/StyledLink';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

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
  height: 20rem;
  width: 50rem;
  flex-direction: column;
`;

const InputContainer = styled(StyledDiv)`
  align-items: flex-start;
  flex-direction: column;
`;

const Box = styled(StyledDiv)`
  height: 2rem;
`;

const ValidationBox = styled(StyledDiv)`
  margin-top: 0.5rem;
`;

// const CapcharBox = styled(StyledDiv)`
//   margin: 1rem;
//   height: 10rem;
//   width: 20em;
//   background-color: gray;
// `;

export default function Signup() {
  function isEmail(asValue) {
    var regExp = /^[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return regExp.test(asValue);
  }

  function isPassword(asValue) {
    var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;
    return regExp.test(asValue);
  }

  const [signupInfo, setSignupInfo] = useState({
    email: '',
    username: '',
    password: '',
    checkPW: '',
  });

  const [validation, setValidation] = useState({
    email: true,
    checkEmail: false,
    username: true,
    password: true,
    checkPW: true,
  });

  useEffect(() => {
    setValidation({
      email: isEmail(signupInfo.email),
      username: true,
      password: isPassword(signupInfo.password),
      checkPW: signupInfo.password === signupInfo.checkPW && isPassword(signupInfo.password),
    });
    console.log(signupInfo);
    console.log('와이러노');
  }, [signupInfo]);

  const handleOnblur = (key) => (e) => {
    const email = signupInfo;
    axios
      .get('http://localhost:8080/auth/signup', { email }) //
      .then((res) => {
        setValidation({ checkEmail: true });
      })
      .catch((err) => setValidation({ checkEmail: false }));
  };

  const handleInputValue = (key) => (e) => {
    setSignupInfo({ ...signupInfo, [key]: e.target.value });
  };

  const isValid = validation.email && validation.username && validation.password && validation.checkPW && validation.checkEmail;

  const history = useHistory();

  const handleSignup = () => {
    const { email, username, password } = signupInfo;
    axios
      .post('http://localhost:8080/auth/signup', { email, username, password }, { withCredentials: true })
      .then((res) => {
        history.push('/signup/complete');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Background>
      <OuterContainer>
        <InnerContainer>
          <TextBox>회원가입</TextBox>
          <form onSubmit={(e) => e.preventDefault()}>
            <InfoBox>
              <InputContainer>
                <Box>Email</Box>
                <StyledInput type='email' onBlur={handleOnblur('email')} onChange={handleInputValue('email')} />
                {validation.email ? null : <ValidationBox>형식에 맞게 입력해주세요</ValidationBox>}
              </InputContainer>
              <InputContainer>
                <Box>Name</Box>
                <StyledInput type='username' onChange={handleInputValue('username')} />
                {validation.username ? null : <ValidationBox>형식에 맞게 입력해주세요</ValidationBox>}
              </InputContainer>
              <InputContainer>
                <Box>PW</Box>
                <StyledInput type='password' onChange={handleInputValue('password')} />
                {validation.password ? null : <ValidationBox>영어, 숫자로 구성된 8 ~ 16자리를 입력해주세요</ValidationBox>}
              </InputContainer>
              <InputContainer>
                <Box>Check</Box>
                <StyledInput type='password' onChange={handleInputValue('checkPW')} />
                {validation.checkPW ? <ValidationBox>비밀번호가 일치합니다</ValidationBox> : <ValidationBox>일치하지 않는 비밀번호 입니다</ValidationBox>}
              </InputContainer>
            </InfoBox>
            {/* <CapcharBox>Capchar</CapcharBox> */}
            <StyledDiv>
              <StyledLink to='/signin'>
                <StyledButton>돌아가기</StyledButton>
              </StyledLink>
              {isValid ? (
                <StyledButton type='submit' onClick={handleSignup}>
                  회원가입
                </StyledButton>
              ) : null}
            </StyledDiv>
          </form>
        </InnerContainer>
      </OuterContainer>
    </Background>
  );
}
