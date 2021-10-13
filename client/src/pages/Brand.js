import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

//redux
import { useSelector, useDispatch } from "react-redux";
import { setBrand } from "../modules/brand";
import { setInfo as setUserInfo } from "../modules/userInfo";
import { login } from "../modules/isLogin";
import { logo } from "../img/brandLogo";

import Navbar from "../components/Navbar";
import LoadingIndicator from "../components/LoadingIndicator";
import Footer from "../components/Footer";
import StyledDiv from "../components/StyledDiv";
import ContentContainer from "../components/ContentContainer";
import BookmarkButton from "../components/BookmarkButton";
import SideMenu from "../components/brand/SideMenu";
import Search from "../components/brand/Search";

import { Link } from "react-router-dom";
import StyledLink from "../components/StyledLink";

const Background = styled.div`
  height: 100vh;
  background-color: grey;
`;

// 사이드 검색 바
const SideContainer = styled(ContentContainer)`
  flex: 1 0 10rem;
  flex-direction: column;
`;

const Logo = styled.div`
  border: 2px solid black;
  height: 10rem;
  width: 10rem;
  margin-bottom: 2rem;
  > img {
    max-width: 100%;
  }
`;

// 카 리스트
const CarContainer = styled(ContentContainer)`
  flex: 7 0 0;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow: auto;
`;

const CarBox = styled.div`
  margin: 1rem;
  height: 15rem;
  width: 15rem;
  border: 1px solid black;
  position: relative;
  overflow: hidden;

  > span,
  div {
    position: absolute;
    visibility: hidden;
    opacity: 0;
    transition: all 0.3s;
  }

  > div {
    top: 0;
    left: 0;
  }

  > span {
    display: block;
    bottom: 0px;
    right: 0px;
    width: 100%;
    padding: 5px;
    background-color: #00000050;
    text-align: center;
  }

  > Link,
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  &:hover > span,
  &:hover > div {
    visibility: visible;
    opacity: 1;
    transition: all 0.3s;
  }
`;

const LinkText = styled(StyledLink)`
  color: white;
  font-size: 1.3rem;
  text-shadow: 0 0 5px #000000;
`;

export default function Brand() {
  const [isLoading, setIsLoading] = useState(true);
  const [isChanged, setIsChanged] = useState(true);
  const { selected } = useParams();

  const { isLogin, brand, userInfo } = useSelector((state) => ({
    isLogin: state.loginReducer,
    brand: state.brandReducer,
    userInfo: state.userInfoReducer,
  }));

  const dispatch = useDispatch();

  const changed = () => {
    setIsChanged(!isChanged);
  };

  const setLogo = (brand) => {
    return logo.filter((e) => e[0] === brand)[0][1];
  };

  const getData = (selected) => {
    const { token, userId, userName, bookmark } = {
      token: localStorage.getItem("token"),
      userId: localStorage.getItem("userId"),
      userName: localStorage.getItem("userName"),
      bookmark: JSON.parse(localStorage.getItem("bookmark")),
    };

    console.log(userInfo);
    console.log("check-token", token);

    if (token) {
      dispatch(login());
      dispatch(setUserInfo({ token, userId, userName, bookmark }));
    }

    axios
      .get(
        `http://ec2-52-79-228-28.ap-northeast-2.compute.amazonaws.com:8080/car?brand=${selected}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        const { carData, bookmarkData } = res.data.data;

        if (isLogin) {
          const filtered = bookmarkData.filter(
            (e) => e.userId === Number(userInfo.userId)
          );
          dispatch(setUserInfo({ bookmark: filtered }));
          localStorage.setItem("bookmark", JSON.stringify(filtered));
        }

        dispatch(setBrand(carData));
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    // 데이터 표기
    getData(selected);
  }, [selected]);

  const logoClickHandler = () => {
    getData(selected);
  };

  useEffect(() => {
    axios
      .get(
        `http://ec2-52-79-228-28.ap-northeast-2.compute.amazonaws.com:8080/car?brand=${selected}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        const { bookmarkData } = res.data.data;

        if (isLogin) {
          const filtered = bookmarkData.filter(
            (e) => e.userId === Number(userInfo.userId)
          );
          dispatch(setUserInfo({ bookmark: filtered }));
          localStorage.setItem("bookmark", JSON.stringify(filtered));
        }
      });
  }, [isChanged]);

  return (
    <>
      <Background>
        <Navbar />
        <StyledDiv>
          <SideContainer>
            <Logo onClick={logoClickHandler}>
              <img src={setLogo(selected)} alt="logo" />
            </Logo>
            <Search />
            <SideMenu selected={selected} logo={logo} />
          </SideContainer>
          <CarContainer>
            {!isLoading ? (
              brand.map((e) => {
                return (
                  <CarBox key={e.id}>
                    <Link to={`/car/${selected}-${e.id}`}>
                      <img src={e.img} alt={e.name} />
                    </Link>
                    <BookmarkButton
                      carId={e.id}
                      changed={changed}
                      bookmark={userInfo.bookmark}
                      accessToken={userInfo.token}
                    />
                    <span>
                      <LinkText to={`/car/${selected}-${e.id}`}>
                        {e.name}
                      </LinkText>
                    </span>
                  </CarBox>
                );
              })
            ) : (
              <LoadingIndicator />
            )}
          </CarContainer>
        </StyledDiv>
      </Background>
      <Footer />
    </>
  );
}
