import styled from 'styled-components';
import Navbar from '../components/Navbar';
import MypageSideBar from '../components/MypageSideBar';
import StyledDiv from '../components/StyledDiv';
import Footer from '../components/Footer';

const Background = styled.div`
  height: 100vh;
`;

const PageContainer = styled(StyledDiv)`
  width: 100&;
  height: 100%;
`;

const SideBarBox = styled(StyledDiv)`
  background-color: gray;
  margin: 1rem;
  height: 85vh;
  width: 30vh;
  flex: 1 1 auto;
`;

const ContentBox = styled(StyledDiv)`
  background-color: gray;
  margin: 1rem;
  height: 30rem;
  width: 50rem;
  flex: 5 1 auto;
`;

export default function Mypage() {
  return (
    <>
      <Background>
        <Navbar />
        <PageContainer>
          <SideBarBox>
            <MypageSideBar />
          </SideBarBox>
          <ContentBox>content</ContentBox>
        </PageContainer>
      </Background>
      <Footer />
    </>
  );
}
