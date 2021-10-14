import styled from "styled-components";
import Navbar from "../components/Navbar";
import MypageSideBar from "../components/MypageSideBar";
import StyledDiv from "../components/StyledDiv";
import Footer from "../components/Footer";
import ContentContainer from "../components/ContentContainer";
import CheckPW from "../components/CheckPW";
import EditUserInfo from "../components/EditUserInfo";
import EditComplete from "../components/EditComplete";
import DeleteUserinfo from "../components/DeleteUserinfo";
import Bookmarks from "../components/Bookmarks";
import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { login } from "../modules/isLogin";
import Background from "../components/Background";

const BackgroundOuter = styled.div`
  height: 100vh;
  position: relative;
  z-index: 0;
`;

const CarContainer = styled(ContentContainer)`
  background-color: #fafafa;
  box-shadow: 0 0 5px #fafafa;
  border-radius: 10px;
  flex: 7 0 0;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow: auto;
  position: relative;
  > span {
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 2rem;
    z-index: 2;
  }
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
    setDeleteInfo(false);
  };

  const [deleteInfo, setDeleteInfo] = useState(false);
  const handleDeleteInfo = () => {
    setDeleteInfo(true);
  };

  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      history.push("/login");
    } else {
      dispatch(login());
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <BackgroundOuter>
        <Background />
        <Navbar />
        <StyledDiv>
          <MypageSideBar handleAll={handleAll} />
          <Switch>
            <Route exact path="/mypage/edit">
              <CarContainer>
                {checkPW ? (
                  deleteInfo ? (
                    <DeleteUserinfo />
                  ) : editInfo ? (
                    <EditComplete />
                  ) : (
                    <EditUserInfo
                      handleDeleteInfo={handleDeleteInfo}
                      handleEditInfo={handleEditInfo}
                    />
                  )
                ) : (
                  <CheckPW handleCheckPW={handleCheckPW} />
                )}
              </CarContainer>
            </Route>
            <Route path="/mypage/">
              <CarContainer>
                <Bookmarks />
              </CarContainer>
            </Route>
          </Switch>
        </StyledDiv>
      </BackgroundOuter>
      <Footer />
    </>
  );
}
