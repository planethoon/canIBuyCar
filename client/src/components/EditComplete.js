import styled from "styled-components";
import StyledButton from "../components/StyledButton";
import StyledDiv from "../components/StyledDiv";
import StyledLink from "../components/StyledLink";

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
  height: 10rem;
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

// const CapcharBox = styled(StyledDiv)`
//   margin: 1rem;
//   height: 10rem;
//   width: 20em;
//   background-color: gray;
// `;

export default function EditComplete() {
  return (
    <OuterContainer>
      <InnerContainer>
        <TextBox>로고</TextBox>
        <InfoBox>
          <InputContainer>
            <Box>회원정보가 수정되었습니다!</Box>
          </InputContainer>
        </InfoBox>
        <StyledDiv>
          <StyledLink to="/mypage">
            <StyledButton>확인</StyledButton>
          </StyledLink>
        </StyledDiv>
      </InnerContainer>
    </OuterContainer>
  );
}
