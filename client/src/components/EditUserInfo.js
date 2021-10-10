import styled from 'styled-components';
import StyledInput from './StyledInput';
import StyledButton from './StyledButton';
import StyledDiv from './StyledDiv';
import StyledLink from './StyledLink';

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

const InputNameContainer = styled(StyledDiv)`
  margin: 0.8rem;
`;

const NameBox = styled(StyledDiv)`
  height: 2rem;
  width: 3.5rem;
`;

const InputNameBox = styled(StyledInput)``;

const InputEmailContainer = styled(InputNameContainer)``;

const EmailBox = styled(NameBox)``;

const InputEmailBox = styled(StyledInput)``;

const InputPWContainer = styled(InputNameContainer)``;

const PWBox = styled(NameBox)``;

const InputPWBox = styled(StyledInput)``;

const InputCheckPWContainer = styled(InputNameContainer)``;

const CheckPWBox = styled(NameBox)``;

const InputCheckPWBox = styled(StyledInput)``;

const ButtonContainer = styled(StyledDiv)``;

const CancleBtn = styled(StyledButton)``;

const EditBtn = styled(StyledButton)``;

export default function EditUserInfo() {
  return (
    <OuterContainer>
      <InnerContainer>
        <TextBox>회원정보 수정</TextBox>
        <InfoBox>
          <InputNameContainer>
            <NameBox>Name</NameBox>
            <InputNameBox />
          </InputNameContainer>
          <InputEmailContainer>
            <EmailBox>Email</EmailBox>
            <InputEmailBox />
          </InputEmailContainer>
          <InputPWContainer>
            <PWBox>PW</PWBox>
            <InputPWBox />
          </InputPWContainer>
          <InputCheckPWContainer>
            <CheckPWBox>Check</CheckPWBox>
            <InputCheckPWBox />
          </InputCheckPWContainer>
        </InfoBox>
        <ButtonContainer>
          <StyledLink to='/mypage/car'>
            <CancleBtn>취소</CancleBtn>
          </StyledLink>
          <EditBtn>수정하기</EditBtn>
        </ButtonContainer>
      </InnerContainer>
    </OuterContainer>
  );
}
