import styled from "styled-components";
import StyledButton from "../components/StyledButton";
import StyledDiv from "../components/StyledDiv";
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
  border-radius: 1rem;
  background: #fafafa;
  box-shadow: inset -9px -9px 18px #e1e1e1, inset 9px 9px 18px #ffffff;
`;

const InfoBox = styled(StyledDiv)`
  margin: 1rem;
  height: 25rem;
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
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  color: #2f312e;
`;

const ValidationBox = styled(StyledDiv)`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  height: 1.2rem;
  color: #b3b3b3;
`;

const ErrorBox = styled(ValidationBox)`
  color: red;
`;

const SignupBtn = styled(StyledButton)`
  margin-top: 0.5rem;
  width: 32rem;
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
  };

  const handleLogin = () => {
    const { email, password } = loginInfo;
    axios
      .post(
        "http://ec2-13-125-41-226.ap-northeast-2.compute.amazonaws.com:8080/auth/login",
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
          <InfoBox>
            <InputContainer>
              <Box>E-mail</Box>
              <StyledInput
                type="email"
                onChange={handleInputValue("email")}
                onKeyPress={handleKeyPress}
              />
            </InputContainer>
            <InputContainer>
              <Box>비밀번호</Box>
              <StyledInput
                type="password"
                onChange={handleInputValue("password")}
                onKeyPress={handleKeyPress}
              />
            </InputContainer>
            <ErrorBox>{errorMessage}</ErrorBox>
          </InfoBox>
          <StyledDiv>
            <StyledButton onClick={() => history.push("/main")}>
              돌아가기
            </StyledButton>
            <StyledButton onClick={handleLogin}>로그인</StyledButton>
          </StyledDiv>
          <SignupBtn onClick={() => history.push("/signup")}>
            <span style={{ margin: "0.5rem" }}>아이디가 없으신가요?</span>
            <span>회원가입</span>
          </SignupBtn>
        </InnerContainer>
      </OuterContainer>
    </Background>
  );
}
