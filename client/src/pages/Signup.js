import styled from "styled-components";
import StyledButton from "../components/StyledButton";
import StyledDiv from "../components/StyledDiv";
import StyledInput from "../components/StyledInput";
import StyledLink from "../components/StyledLink";
import axios from "axios";
import { useState, useEffect } from "react";

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
  border-radius: 1rem;
  background: #fafafa;
  box-shadow: inset -9px -9px 18px #e1e1e1, inset 9px 9px 18px #ffffff;
`;

const InfoBox = styled(StyledDiv)`
  margin: 1rem;
  height: 32rem;
  width: 50rem;
  flex-direction: column;
`;

const InputContainer = styled(StyledDiv)`
  align-items: flex-start;
  flex-direction: column;
  margin: 0.2rem;
`;

const Box = styled(StyledDiv)`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #2f312e;
`;

const ValidationBox = styled(StyledDiv)`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  height: 1rem;
  font-size: 0.8rem;
  color: #b3b3b3;
`;

const ErrorBox = styled(ValidationBox)`
  color: red;
  font-size: 0.8rem;
`;

const Button = styled(StyledButton)`
  &:hover {
    color: gray;
  }
`;

export default function Signup({ signupComplete }) {
  const [signupInfo, setSignupInfo] = useState({
    email: "",
    username: "",
    password: "",
    checkPW: "",
  });

  const [validation, setValidation] = useState({
    email: false,
    checkEmail: true,
    username: false,
    password: false,
    checkPW: false,
  });

  const [message, setMessage] = useState({
    email: "이메일 주소를 입력해주세요",
    username: "이름을 입력해주세요",
    password: "비밀번호는 8자리 이상, 숫자, 문자, 특수문자가 포함되어야 합니다",
    checkPW: "비밀번호를 입력해주세요",
  });

  function isEmail(asValue) {
    var regExp =
      /^[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return regExp.test(asValue);
  }

  function isUsername(asValue) {
    var regExp = /^[ㄱ-ㅎ가-힣]+$/;
    return regExp.test(asValue);
  }

  function isPassword(asValue) {
    var regExp =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return regExp.test(asValue);
  }

  const handleOnblurEmail = (key) => (e) => {
    if (!isEmail(signupInfo.email)) {
      setMessage({ ...message, email: "올바른 이메일 주소가 아닙니다" });
      return;
    }
    axios
      .post(
        "http://ec2-52-79-144-13.ap-northeast-2.compute.amazonaws.com:8080/auth/email",
        { [key]: e.target.value }
      ) //
      .then((res) => {
        setValidation({ ...validation, checkEmail: true });
        setMessage({ ...message, email: "사용 가능한 이메일입니다" });
      })
      .catch((err) => {
        setValidation({ ...validation, checkEmail: false });
        setMessage({ ...message, email: "이미 가입된 이메일입니다" });
      });
  };

  const handleInputValue = (key) => (e) => {
    setSignupInfo({ ...signupInfo, [key]: e.target.value.toLowerCase() });
  };

  const handleSignup = () => {
    const { email, username, password } = signupInfo;
    axios
      .post(
        "http://ec2-52-79-144-13.ap-northeast-2.compute.amazonaws.com:8080/auth/signup",
        { email, username, password }
      )
      .then((res) => {
        signupComplete();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleKeyPress = (e) => {
    if (e.type === "keypress" && e.code === "Enter" && isValid) {
      handleSignup();
    }
  };

  const isValid =
    validation.email &&
    validation.username &&
    validation.password &&
    validation.checkPW &&
    validation.checkEmail;

  useEffect(() => {
    setMessage({
      ...message,
      password:
        signupInfo.password.length >= 8
          ? isPassword(signupInfo.password)
            ? "사용할 수 있는 비밀번호 입니다"
            : "비밀번호는 숫자, 문자, 특수문자가 포함되어야합니다"
          : "비밀번호는 8자리 이상, 숫자, 문자, 특수문자가 포함되어야 합니다",
      checkPW:
        signupInfo.checkPW.length >= signupInfo.password.length &&
        signupInfo.password.length
          ? signupInfo.checkPW === signupInfo.password
            ? "비밀번호가 일치합니다"
            : "비밀번호가 불일치합니다"
          : "비밀번호를 입력해주세요",
      username:
        signupInfo.username.length >= 2
          ? isUsername(signupInfo.username)
            ? "멋진 이름이네요 :)"
            : "한글만 입력해주세요"
          : "이름은 2자리 이상의 한글로 입력해주세요",
    });
    setValidation({
      ...validation,
      email: isEmail(signupInfo.email),
      username:
        isUsername(signupInfo.username) && signupInfo.username.length >= 2,
      password: isPassword(signupInfo.password),
      checkPW: signupInfo.password === signupInfo.checkPW,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signupInfo]);

  return (
    <Background>
      <OuterContainer>
        <InnerContainer>
          <InfoBox>
            <InputContainer>
              <Box>E-mail</Box>
              <StyledInput
                type="email"
                onBlur={handleOnblurEmail("email")}
                onChange={handleInputValue("email")}
                onKeyPress={handleKeyPress}
              />
              {message.email === "이메일 주소를 입력해주세요" ? (
                <ValidationBox>{message.email}</ValidationBox>
              ) : message.email === "사용 가능한 이메일입니다" ? (
                <ValidationBox>{message.email}</ValidationBox>
              ) : (
                <ErrorBox>{message.email}</ErrorBox>
              )}
            </InputContainer>
            <InputContainer>
              <Box>이름</Box>
              <StyledInput
                type="username"
                onChange={handleInputValue("username")}
                onKeyPress={handleKeyPress}
              />
              {message.username === "한글만 입력해주세요" ? (
                <ErrorBox>{message.username}</ErrorBox>
              ) : (
                <ValidationBox>{message.username}</ValidationBox>
              )}
            </InputContainer>
            <InputContainer>
              <Box>비밀번호</Box>
              <StyledInput
                type="password"
                onChange={handleInputValue("password")}
                onKeyPress={handleKeyPress}
              />
              {message.password ===
              "비밀번호는 8자리 이상, 숫자, 문자, 특수문자가 포함되어야 합니다" ? (
                <ValidationBox>{message.password}</ValidationBox>
              ) : message.password === "사용할 수 있는 비밀번호 입니다" ? (
                <ValidationBox>{message.password}</ValidationBox>
              ) : (
                <ErrorBox>{message.password}</ErrorBox>
              )}
            </InputContainer>
            <InputContainer>
              <Box>비밀번호 확인</Box>
              <StyledInput
                type="password"
                onChange={handleInputValue("checkPW")}
                onKeyPress={handleKeyPress}
              />
              {message.checkPW === "비밀번호가 불일치합니다" ? (
                <ErrorBox>{message.checkPW}</ErrorBox>
              ) : (
                <ValidationBox>{message.checkPW}</ValidationBox>
              )}
            </InputContainer>
          </InfoBox>
          <StyledDiv>
            <StyledLink to="/login">
              <StyledButton>돌아가기</StyledButton>
            </StyledLink>
            {isValid ? (
              <StyledButton type="submit" onClick={handleSignup}>
                회원가입
              </StyledButton>
            ) : (
              <Button>회원가입</Button>
            )}
          </StyledDiv>
        </InnerContainer>
      </OuterContainer>
    </Background>
  );
}
