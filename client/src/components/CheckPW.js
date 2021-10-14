import styled from "styled-components";
import StyledButton from "./StyledButton";
import StyledDiv from "./StyledDiv";
import StyledLink from "./StyledLink";
import StyledInput from "./StyledInput";
import { useState } from "react";
import axios from "axios";

const OuterContainer = styled(StyledDiv)`
  height: 85vh;
  width: 100vw;
  background-color: black;
`;

const InnerContainer = styled(StyledDiv)`
  height: 70vh;
  width: 45rem;
  flex-direction: column;
  border-radius: 1rem;
  background: #fafafa;
  box-shadow: inset -9px -9px 18px #e1e1e1, inset 9px 9px 18px #ffffff;
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
  color: red;
`;

const Button = styled(StyledButton)`
  margin-top: 0;
`;

export default function CheckPW({ handleCheckPW }) {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleInputValue = (key) => (e) => {
    setPassword(`${e.target.value.toLowerCase()}`);
    setMessage("");
  };

  const handleOnclick = () => {
    const token = localStorage.getItem("token");
    axios
      .post(
        "http://ec2-52-79-144-13.ap-northeast-2.compute.amazonaws.com:8080/auth/password",
        { password },
        { headers: { authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        handleCheckPW();
      })
      .catch((err) => {
        setMessage("비밀번호를 확인해주세요");
      });
  };

  const handleKeyPress = (e) => {
    if (e.type === "keypress" && e.code === "Enter") {
      handleOnclick();
    }
  };

  return (
    <OuterContainer>
      <InnerContainer>
        <InfoBox>
          <InputContainer>
            <Box>비밀번호 확인</Box>
            <StyledInput
              type="password"
              onChange={handleInputValue("password")}
              onKeyPress={handleKeyPress}
            />
          </InputContainer>
          <ValidationBox>{message}</ValidationBox>
        </InfoBox>
        <StyledDiv>
          <StyledLink to="/mypage/car">
            <Button>취소</Button>
          </StyledLink>
          <Button onClick={handleOnclick}>확인</Button>
        </StyledDiv>
      </InnerContainer>
    </OuterContainer>
  );
}
