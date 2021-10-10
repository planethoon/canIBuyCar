import styled from 'styled-components';
import StyledButton from '../components/StyledButton';
import StyledDiv from '../components/StyledDiv';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StyledInput from '../components/StyledInput';

const Background = styled.div`
  height: 100vh;
  background-color: black;
`;

const PageContainer = styled(StyledDiv)`
  flex-direction: column;
`;

const InputContainer = styled(StyledDiv)`
  width: 70vw;
  height: 20vh;
  flex-direction: column;
  /* color: white; */
  background-color: white;
  border: black 1px solid;
  margin: 1rem;
`;

const RequestInput = styled(StyledInput)`
  width: 50vw;
  height: 4.3rem;
`;

const AddBtn = styled(StyledButton)``;

const CommentsContainer = styled(StyledDiv)`
  width: 70vw;
  height: 70vh;
  background-color: white;
  border: black 1px solid;
  align-items: flex-start;
`;

const Comment = styled(StyledDiv)`
  background-color: blue;
  width: 70vw;
  height: 10vh;
`;

const TextBox = styled(StyledDiv)`
  background-color: purple;
  width: 30vw;
  flex: 5 1 auto;
  height: 8vh;
`;

const ButtonBox = styled(StyledDiv)`
  background-color: white;
  width: 5vw;
  flex: 1 1 auto;
  height: 8vh;
`;

const LikeBtn = styled(StyledButton)``;

const DeleteBtn = styled(LikeBtn)``;

export default function Request() {
  return (
    <>
      <Background>
        <Navbar />
        <PageContainer>
          <InputContainer>
            <StyledDiv>원하시는 차량이 없나요 ?</StyledDiv>
            <StyledDiv>
              <RequestInput />
              <AddBtn>저장</AddBtn>
            </StyledDiv>
          </InputContainer>
          <CommentsContainer>
            <Comment>
              <TextBox>123</TextBox>
              <ButtonBox>
                <LikeBtn>좋아요</LikeBtn>
                <DeleteBtn>삭제</DeleteBtn>
              </ButtonBox>
            </Comment>
          </CommentsContainer>
        </PageContainer>
      </Background>
      <Footer />
    </>
  );
}
