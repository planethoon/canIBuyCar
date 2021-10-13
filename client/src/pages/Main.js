import styled from "styled-components";
import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";

import { logo } from "../img/brandLogo";
import { useDispatch } from "react-redux";
import { setInfo as setUserInfo } from "../modules/userInfo";
import { login } from "../modules/isLogin";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StyledDiv from "../components/StyledDiv";
import { useEffect } from "react";

const Background = styled.div`
  background-color: grey;
  height: 100vh;
`;

const LogoContainer = styled(StyledDiv)`
  height: 90vh;
  flex-direction: column;
`;

const LogoWrapper = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow: auto;
`;

const LogoOuter = styled.ul`
  margin: 2rem;
`;

const LogoBtn = styled.li`
  border: 2px solid black;
  height: 10rem;
  width: 10rem;
  flex: 1 1 auto;
  > img {
    max-width: 100%;
  }
`;

// const LogoImage = styled.img`
//   max-width: 100%;
// `

export default function Main() {
  const dispatch = useDispatch();
  useEffect(() => {
    const { token, userId, userName, bookmark } = {
      token: localStorage.getItem("token"),
      userId: JSON.parse(localStorage.getItem("userId")),
      userName: localStorage.getItem("userName"),
      bookmark: JSON.parse(localStorage.getItem("bookmark")) || [],
    };

    if (token) {
      dispatch(login());
      dispatch(setUserInfo({ token, userId, userName, bookmark }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Background>
        <Navbar />
        <LogoContainer>
          <LogoWrapper>
            {logo.map((e) => {
              return (
                <LogoOuter key={e[1]}>
                  <Link to={`/brand/${e[0]}`}>
                    <LogoBtn>
                      <img src={e[1]} alt={e[0]} />
                    </LogoBtn>
                  </Link>
                </LogoOuter>
              );
            })}
          </LogoWrapper>
        </LogoContainer>
      </Background>
      <Footer />
    </>
  );
}
