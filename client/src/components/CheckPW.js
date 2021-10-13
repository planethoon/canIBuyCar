import styled from "styled-components";
import StyledButton from "./StyledButton";
import StyledDiv from "./StyledDiv";
import StyledLink from "./StyledLink";
import StyledInput from "./StyledInput";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
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
  height: 8rem;
  width: 50rem;
  flex-direction: column;
`;

const InputContainer = styled(StyledDiv)`
  align-items: flex-start;
  flex-direction: column;
  margin: 0.2rem;
`;

const Box = styled(StyledDiv)`
  height: 1rem;
`;

const ValidationBox = styled(StyledDiv)`
  margin: none;
  margin-top: 1.3rem;
  height: 1rem;
  width: 10rem;
`;

const Button = styled(StyledButton)`
  margin-top: 0;
`;

export default function CheckPW({ handleCheckPW }) {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const history = useHistory();

  const handleInputValue = (key) => (e) => {
    setPassword(`${e.target.value.toLowerCase()}`);
    setMessage("");
  };

  const handleOnclick = () => {
    const token = localStorage.getItem("token");
    console.log(token);
    console.log(password);
    axios
      .post(
        "http://localhost:8080/auth/password",
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

  useEffect(() => {
    console.log(password);
  }, [password]);

  return (
    <OuterContainer>
      <InnerContainer>
        <TextBox>비밀번호 확인</TextBox>
        <InfoBox>
          <InputContainer>
            <Box>PW</Box>
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
