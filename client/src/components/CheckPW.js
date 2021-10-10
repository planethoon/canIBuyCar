import styled from 'styled-components';
import StyledButton from './StyledButton';
import StyledDiv from './StyledDiv';
import StyledLink from './StyledLink';
import StyledInput from './StyledInput';

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
  height: 5rem;
  width: 50rem;
  flex-direction: column;
`;

const InputPWContainer = styled(StyledDiv)`
  margin: 0.5rem;
`;

const InputPWBox = styled(StyledInput)``;

const PWBox = styled(StyledDiv)`
  height: 2rem;
  width: 3.5rem;
`;

const ButtonContainer = styled(StyledDiv)``;

const CancleBtn = styled(StyledButton)``;

const EditBtn = styled(StyledButton)``;

export default function CheckPW({ onClickHandler }) {
  return (
    <OuterContainer>
      <InnerContainer>
        <TextBox>비밀번호 확인</TextBox>
        <InfoBox>
          <InputPWContainer>
            <PWBox>PW</PWBox>
            <InputPWBox />
          </InputPWContainer>
        </InfoBox>
        <ButtonContainer>
          <StyledLink to='/mypage/car'>
            <CancleBtn>취소</CancleBtn>
          </StyledLink>
          <StyledLink to='/mypage/edit/userinfo'>
            <EditBtn onClick={onClickHandler}>확인</EditBtn>
          </StyledLink>
        </ButtonContainer>
      </InnerContainer>
    </OuterContainer>
  );
}
