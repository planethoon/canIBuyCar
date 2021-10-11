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
  height: 30rem;
  width: 50rem;
  flex-direction: column;
`;

const InputContainer = styled(StyledDiv)`
  align-items: flex-start;
  flex-direction: column;
  margin: 0.2rem;
`;

const Box = styled(StyledDiv)`
  height: 2rem;
`;

const ValidationBox = styled(StyledDiv)`
  margin-top: 0.5rem;
  height: 1rem;
`;

export default function Signup() {
  function isEmail(asValue) {
    var regExp = /^[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return regExp.test(asValue);
  }

  function isUsername(asValue) {
    var regExp = /^([가-힣]).{1,10}$/;
    return regExp.test(asValue);
  }

  function isPassword(asValue) {
    var regExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return regExp.test(asValue);
  }

  const [signupInfo, setSignupInfo] = useState({
    email: '',
    username: '',
    password: '',
    checkPW: '',
  });

  const [validation, setValidation] = useState({
    email: false,
    checkEmail: false,
    username: false,
    password: false,
    checkPW: false,
  });

  const [message, setMessage] = useState({
    email: '이메일 주소를 입력해주세요',
    username: '이름을 입력해주세요',
    password: '비밀번호는 8자리 이상, 숫자, 문자, 특수문자가 포함되어야 합니다',
    checkPW: '비밀번호를 입력해주세요',
  });

  useEffect(() => {
    if (signupInfo.username.length >= 2) {
      if (isUsername(signupInfo.username)) {
        setMessage({ ...message, username: '사용 가능한 닉네임입니다' });
      } else {
        setMessage({ ...message, username: '닉네임에는 숫자와 문자만 입력할 수 있습니다' });
      }
    }

    if (signupInfo.password.length >= 8) {
      if (isPassword(signupInfo.password)) {
        setMessage({
          ...message,
          password: '사용할 수 있는 비밀번호 입니다',
        });
      } else {
        setMessage({
          ...message,
          password: '비밀번호는 숫자, 문자, 특수문자가 포함되어야합니다',
        });
      }
    } else {
      setMessage({
        ...message,
        password: '비밀번호는 8자리 이상, 숫자, 문자, 특수문자가 포함되어야 합니다',
      });
    }

    if (signupInfo.checkPW.length >= 8) {
      if (signupInfo.checkPW === signupInfo.password) {
        setMessage({
          ...message,
          checkPW: '비밀번호가 일치합니다',
        });
      } else {
        setMessage({
          ...message,
          checkPW: '비밀번호가 불일치합니다',
        });
      }
    } else {
      setMessage({
        ...message,
        checkPW: '비밀번호를 입력해주세요',
      });
    }

    setValidation({
      ...validation,
      email: isEmail(signupInfo.email),
      username: isUsername(signupInfo.username),
      password: isPassword(signupInfo.password),
      checkPW: signupInfo.password === signupInfo.checkPW,
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signupInfo]);

  const handleOnblur = (key) => (e) => {
    if (!isEmail(signupInfo.email)) {
      setMessage({ ...message, email: '올바른 이메일 주소가 아닙니다' });
      return;
    }
    axios
      .post('http://localhost:8080/auth/email', { [key]: e.target.value }) //
      .then((res) => {
        console.log(res.status);
        setValidation({ ...validation, checkEmail: true });
        setMessage({ ...message, email: '사용 가능한 이메일입니다' });
      })
      .catch((err) => {
        setValidation({ ...validation, checkEmail: false });
        setMessage({ ...message, email: '이미 가입된 이메일입니다' });
      });
  };

  const handleInputValue = (key) => (e) => {
    setSignupInfo({ ...signupInfo, [key]: e.target.value });
  };

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

  const isValid = validation.email && validation.username && validation.password && validation.checkPW && validation.checkEmail;

  const history = useHistory();

  return (
    <Background>
      <OuterContainer>
        <InnerContainer>
          <TextBox>회원가입</TextBox>
          <form onSubmit={(e) => e.preventDefault()}>
            <InfoBox>
              <InputContainer>
                <Box>E-mail</Box>
                <StyledInput type='email' onBlur={handleOnblur('email')} onChange={handleInputValue('email')} />
                <ValidationBox>{message.email}</ValidationBox>
              </InputContainer>
              <InputContainer>
                <Box>이름</Box>
                <StyledInput type='username' onChange={handleInputValue('username')} />
                <ValidationBox>{message.username}</ValidationBox>
              </InputContainer>
              <InputContainer>
                <Box>비밀번호</Box>
                <StyledInput type='password' onChange={handleInputValue('password')} />
                <ValidationBox>{message.password}</ValidationBox>
              </InputContainer>
              <InputContainer>
                <Box>비밀번호 확인</Box>
                <StyledInput type='password' onChange={handleInputValue('checkPW')} />
                <ValidationBox>{message.checkPW}</ValidationBox>
              </InputContainer>
            </InfoBox>
            <StyledDiv>
              <StyledLink to='/signin'>
                <StyledButton>돌아가기</StyledButton>
              </StyledLink>
              {isValid ? (
                <StyledButton type='submit' onClick={handleSignup}>
                  회원가입
                </StyledButton>
              ) : (
                <StyledButton type='submit'>회원가입</StyledButton>
              )}
            </StyledDiv>
          </form>
        </InnerContainer>
      </OuterContainer>
    </Background>
  );
}
