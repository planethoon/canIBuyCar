import styled from 'styled-components';
import Navbar from '../components/Navbar';
import MypageSideBar from '../components/MypageSideBar';
import StyledDiv from '../components/StyledDiv';
import Footer from '../components/Footer';
import ContentContainer from '../components/ContentContainer';
import EditUserInfo from '../components/EditUserInfo';
import Favorites from '../components/Favorites';
import { Route, Switch } from 'react-router-dom';

const Background = styled.div`
  height: 100vh;
  background-color: grey;
`;

const CarContainer = styled(ContentContainer)`
  flex: 7 0 0;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow: auto;
`;

export default function Mypage() {
  return (
    <>
      <Background>
        <Navbar />
        <StyledDiv>
          <MypageSideBar />
          <Switch>
            <Route path='/mypage/car'>
              <CarContainer>
                <Favorites />
              </CarContainer>
            </Route>
            <Route path='/mypage/edit'>
              <CarContainer>
                <EditUserInfo />
              </CarContainer>
            </Route>
          </Switch>
        </StyledDiv>
      </Background>
      <Footer />
    </>
  );
}
