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
  border-radius: 1rem;
  background: #fafafa;
  box-shadow: inset -9px -9px 18px #e1e1e1, inset 9px 9px 18px #ffffff;
`;

const InfoBox = styled(StyledDiv)`
  margin: 1rem;
  height: 2rem;
  width: 50rem;
  flex-direction: column;
`;

const InputContainer = styled(StyledDiv)`
  align-items: flex-start;
  flex-direction: column;
`;

const Box = styled(StyledDiv)`
  font-size: 1.2rem;
  height: 2rem;
`;

export default function EditComplete() {
  return (
    <OuterContainer>
      <InnerContainer>
        <InfoBox>
          <InputContainer>
            <Box>🎉 회원정보가 수정되었습니다 🎉</Box>
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
