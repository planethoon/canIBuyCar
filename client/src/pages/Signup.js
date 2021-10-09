import styled from 'styled-components';
import StyledButton from '../components/StyledButton';
import StyledDiv from '../components/StyledDiv';
import StyledInput from '../components/StyledInput';

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

const SignupTextBox = styled(StyledDiv)`
  margin: 1rem;
  height: 5rem;
  width: 40rem;
  background-color: gray;
`;

const InfoBox = styled(StyledDiv)`
  margin: 1rem;
  height: 20rem;
  width: 50rem;
  flex-direction: column;
`;

const InputEmailContainer = styled(StyledDiv)`
  margin: 1rem;
`;

const EmailBox = styled(StyledDiv)`
  height: 2rem;
  width: 3.5rem;
`;

const InputEmailBox = styled(StyledInput)``;

const InputNameContainer = styled(InputEmailContainer)``;

const NameBox = styled(EmailBox)``;

const InputNameBox = styled(StyledInput)``;

const InputPWContainer = styled(InputEmailContainer)``;

const PWBox = styled(EmailBox)``;

const InputPWBox = styled(StyledInput)``;

const InputCheckPWContainer = styled(InputEmailContainer)``;

const CheckPWBox = styled(EmailBox)``;

const InputCheckPWBox = styled(StyledInput)``;

const CapcharBox = styled(StyledDiv)`
  margin: 1rem;
  height: 10rem;
  width: 20em;
  background-color: gray;
`;

const SignupBtn = styled(StyledButton)``;

export default function Signup() {
  return (
    <Background>
      <OuterContainer>
        <InnerContainer>
          <SignupTextBox>Sign up</SignupTextBox>
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
          <CapcharBox>Capchar</CapcharBox>
          <SignupBtn>Sign up </SignupBtn>
        </InnerContainer>
      </OuterContainer>
    </Background>
  );
}
