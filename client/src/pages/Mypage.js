import styled from "styled-components";
import Navbar from "../components/Navbar";
import MypageSideBar from "../components/MypageSideBar";
import StyledDiv from "../components/StyledDiv";
import Footer from "../components/Footer";
import ContentContainer from "../components/ContentContainer";
import CheckPW from "../components/CheckPW";
import EditUserInfo from "../components/EditUserInfo";
import EditComplete from "../components/EditComplete";
import Favorites from "../components/Favorites";
import { Route, Switch } from "react-router-dom";
import { useState } from "react";

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
  const [checkPW, setCheckPW] = useState(false);
  const handleCheckPW = () => {
    setCheckPW(true);
  };

  const [editInfo, setEditInfo] = useState(false);
  const handleEditInfo = () => {
    setEditInfo(true);
  };

  const handleAll = () => {
    setCheckPW(false);
    setEditInfo(false);
  };

  return (
    <>
      <Background>
        <Navbar />
        <StyledDiv>
          <MypageSideBar handleAll={handleAll} />
          <Switch>
            <Route exact path="/mypage/edit">
              <CarContainer>
                {checkPW ? (
                  editInfo ? (
                    <EditComplete />
                  ) : (
                    <EditUserInfo handleEditInfo={handleEditInfo} />
                  )
                ) : (
                  <CheckPW handleCheckPW={handleCheckPW} />
                )}
              </CarContainer>
            </Route>
            <Route path="/mypage/">
              <CarContainer>
                <Favorites />
              </CarContainer>
            </Route>
          </Switch>
        </StyledDiv>
      </Background>
      <Footer />
    </>
  );
}
