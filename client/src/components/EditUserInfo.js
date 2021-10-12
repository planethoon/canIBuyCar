import styled from "styled-components";
import StyledInput from "./StyledInput";
import StyledButton from "./StyledButton";
import StyledDiv from "./StyledDiv";
import StyledLink from "./StyledLink";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { setInfo as setUserInfo } from "../modules/userInfo";
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
  margin: 3rem;
  height: 15rem;
  width: 60rem;
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

export default function EditUserInfo() {
  const [editInfo, setEditInfo] = useState({
    username: "",
    password: "",
    checkPW: "",
  });

  const [validation, setValidation] = useState({
    username: false,
    password: false,
    checkPW: false,
  });

  const [message, setMessage] = useState({
    username: "이름을 입력해주세요",
    password: "비밀번호는 8자리 이상, 숫자, 문자, 특수문자가 포함되어야 합니다",
    checkPW: "비밀번호를 입력해주세요",
  });

  const history = useHistory();
  const dispatch = useDispatch();

  function isUsername(asValue) {
    var regExp = /^[가-힣]+$/;
    return regExp.test(asValue);
  }

  function isPassword(asValue) {
    var regExp =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return regExp.test(asValue);
  }

  const handleInputValue = (key) => (e) => {
    setEditInfo({ ...editInfo, [key]: e.target.value });
  };

  const handleEdit = () => {
    const { username, password } = editInfo;
    const token = localStorage.getItem("token");
    axios
      .put(
        "http://localhost:8080/auth",
        { username, password },
        { headers: { authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        console.log(res.data);
        const { userId, userName, accessToken } = res.data.data;
        localStorage.setItem("token", accessToken);
        localStorage.setItem("userId", userId);
        localStorage.setItem("userName", userName);
        if (token) {
          dispatch(setUserInfo({ token, userId, userName }));
          history.push("/mypage/edit/complete");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleKeyPress = (e) => {
    if (e.type === "keypress" && e.code === "Enter" && isValid) {
      handleEdit();
    }
  };

  const isValid =
    validation.username && validation.password && validation.checkPW;

  useEffect(() => {
    setMessage({
      ...message,
      password:
        editInfo.password.length >= 8
          ? isPassword(editInfo.password)
            ? "사용할 수 있는 비밀번호 입니다"
            : "비밀번호는 숫자, 문자, 특수문자가 포함되어야합니다"
          : "비밀번호는 8자리 이상, 숫자, 문자, 특수문자가 포함되어야 합니다",
      checkPW:
        editInfo.checkPW.length >= editInfo.password.length &&
        editInfo.password.length
          ? editInfo.checkPW === editInfo.password
            ? "비밀번호가 일치합니다"
            : "비밀번호가 불일치합니다"
          : "비밀번호를 입력해주세요",
      username:
        editInfo.username.length >= 2
          ? isUsername(editInfo.username)
            ? "멋진 이름이네요 :)"
            : "한글만 입력해주세요"
          : "이름은 2자리 이상의 한글로 입력해주세요",
    });
    setValidation({
      ...validation,
      username: isUsername(editInfo.username) && editInfo.username.length >= 2,
      password: isPassword(editInfo.password),
      checkPW: editInfo.password === editInfo.checkPW,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editInfo]);

  return (
    <OuterContainer>
      <InnerContainer>
        <TextBox>회원정보 수정</TextBox>
        <InfoBox>
          <InputContainer>
            <Box>이름</Box>
            <StyledInput
              type="username"
              onChange={handleInputValue("username")}
              onKeyPress={handleKeyPress}
            />
            <ValidationBox>{message.username}</ValidationBox>
          </InputContainer>
          <InputContainer>
            <Box>비밀번호</Box>
            <StyledInput
              type="password"
              onChange={handleInputValue("password")}
              onKeyPress={handleKeyPress}
            />
            <ValidationBox>{message.password}</ValidationBox>
          </InputContainer>
          <InputContainer>
            <Box>비밀번호 확인</Box>
            <StyledInput
              type="password"
              onChange={handleInputValue("checkPW")}
              onKeyPress={handleKeyPress}
            />
            <ValidationBox>{message.checkPW}</ValidationBox>
          </InputContainer>
        </InfoBox>
        <StyledDiv>
          <StyledLink to="/mypage/car">
            <StyledButton>돌아가기</StyledButton>
          </StyledLink>
          {isValid ? (
            <StyledButton type="submit" onClick={handleEdit}>
              수정하기
            </StyledButton>
          ) : (
            <StyledButton type="submit">회원가입</StyledButton>
          )}
        </StyledDiv>
      </InnerContainer>
    </OuterContainer>
  );
}
