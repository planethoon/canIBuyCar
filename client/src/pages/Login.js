import styled from "styled-components";
import StyledButton from "../components/StyledButton";
import StyledDiv from "../components/StyledDiv";
import StyledLink from "../components/StyledLink";
import StyledInput from "../components/StyledInput";
import { useState } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { login } from "../modules/isLogin";
import { setInfo as setUserInfo } from "../modules/userInfo";
import axios from "axios";

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
  height: 15rem;
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
  margin-top: 2rem;
  height: 1rem;
`;

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

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value.toLowerCase() });
    setErrorMessage("");
    console.log(loginInfo.password);
  };

  const handleLogin = () => {
    const { email, password } = loginInfo;
    axios
      .post(
        "http://ec2-52-79-144-13.ap-northeast-2.compute.amazonaws.com:8080/auth/login",
        { email, password },
        { withCredentials: true }
      )
      .then((res) => {
        const { userId, userName, accessToken } = res.data.data;
        localStorage.setItem("token", accessToken);
        localStorage.setItem("userId", userId);
        localStorage.setItem("userName", userName);

        const token = localStorage.getItem("token");
        if (token) {
          dispatch(login());
          dispatch(setUserInfo({ token, userId, userName }));
          history.push("/main");
        }
      })
      .catch((err) => {
        setErrorMessage("이메일 또는 비밀번호를 확인해주세요");
      });
  };

  const handleKeyPress = (e) => {
    if (e.type === "keypress" && e.code === "Enter") {
      handleLogin();
    }
  };
  return (
    <Background>
      <OuterContainer>
        <InnerContainer>
          <StyledLink to="/main">
            <TextBox>로고</TextBox>
          </StyledLink>
          <InfoBox>
            <InputContainer>
              <Box>Email</Box>
              <StyledInput
                type="email"
                onChange={handleInputValue("email")}
                onKeyPress={handleKeyPress}
              />
            </InputContainer>
            <InputContainer>
              <Box>PW</Box>
              <StyledInput
                type="password"
                onChange={handleInputValue("password")}
                onKeyPress={handleKeyPress}
              />
            </InputContainer>
            <ValidationBox>{errorMessage}</ValidationBox>
          </InfoBox>
          <SignupContainer>
            아이디가 없으신가요 ?
            <SignupBox>
              <StyledLink to="/signup"> 회원가입 </StyledLink>
            </SignupBox>
          </SignupContainer>
          <StyledDiv>
            <StyledButton onClick={handleLogin}>로그인</StyledButton>
            <StyledButton>소셜 로그인</StyledButton>
          </StyledDiv>
        </InnerContainer>
      </OuterContainer>
    </Background>
  );
}
