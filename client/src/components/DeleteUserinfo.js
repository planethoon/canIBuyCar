import axios from "axios";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import StyledButton from "../components/StyledButton";
import StyledDiv from "../components/StyledDiv";
import { logout } from "../modules/isLogin";

const OuterContainer = styled(StyledDiv)`
  height: 85vh;
  width: 100vw;
  background-color: black;
`;

const InnerContainer = styled(StyledDiv)`
  height: 70vh;
  width: 45rem;
  flex-direction: column;
  background-color: gainsboro;
`;

const TextBox = styled(StyledDiv)`
  margin: 1rem;
  height: 5rem;
  width: 40rem;
  background-color: gray;
`;

const InfoBox = styled(StyledDiv)`
  margin: 1rem;
  width: 30rem;
  flex-direction: column;
`;

const InputContainer = styled(StyledDiv)`
  align-items: flex-start;
  flex-direction: column;
`;

const Box = styled(StyledDiv)`
  height: 2rem;
`;

const DeleteBtn = styled(StyledButton)`
  color: red;
`;

export default function DeleteUserinfo() {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleDelete = () => {
    const token = localStorage.getItem("token");
    axios
      .delete(
        "http://ec2-52-79-144-13.ap-northeast-2.compute.amazonaws.com:8080/auth/",
        {
          headers: { authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        localStorage.clear();
        dispatch(logout());
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <OuterContainer>
      <InnerContainer>
        <InfoBox>
          <InputContainer>
            <Box>정말로 탈퇴하시겠습니까? 회원정보는 복구할 수 없습니다</Box>
            <Box>버튼을 누르면 회원정보가 삭제되고 랜딩페이지로 이동합니다</Box>
          </InputContainer>
        </InfoBox>
        <StyledDiv>
          <DeleteBtn onClick={handleDelete}>탈퇴</DeleteBtn>
        </StyledDiv>
      </InnerContainer>
    </OuterContainer>
  );
}
