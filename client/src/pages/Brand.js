import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

//redux
import { useSelector, useDispatch } from "react-redux";
import { setInfo as setBrandInfo } from "../modules/brand";
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
  const { selected } = useParams();

  const { isLogin, brand, userInfo } = useSelector((state) => ({
    isLogin: state.loginReducer,
    brand: state.brandReducer,
    userInfo: state.userInfoReducer,
  }));

  const dispatch = useDispatch();

  const setLogo = (brand) => {
    return logo.filter((e) => e[0] === brand)[0][1];
  };
  console.log(userInfo);

  const getData = (selected) => {
    axios
      .get(`http://localhost:8080/car?brand=${selected}`, {
        withCredentials: true,
      })
      .then((res) => {
        const { token, userId, userName } = {
          token: localStorage.getItem("token"),
          userId: localStorage.getItem("userId"),
          userName: localStorage.getItem("userName"),
        };
        if (token) {
          dispatch(login());
          dispatch(setUserInfo({ token, userId, userName }));
        }
        return res;
      })
      .then((res) => {
        setTimeout(() => {
          const { carData, bookmarkData } = res.data.data;
          console.log("필터 전 북마크", bookmarkData);
          console.log("로그인 여부", isLogin);
          if (isLogin) {
            const filtered = bookmarkData.filter(
              (e) => e.userId === Number(userInfo.userId)
            );
            console.log("필터된 북마크", filtered);
            dispatch(setUserInfo({ bookmark: filtered }));
          }
          dispatch(setBrandInfo(carData));
          setIsLoading(false);
        }, 0);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    // 데이터 표기
    getData(selected);
  }, [isLogin]);

  const logoClickHandler = () => {
    getData(selected);
  };

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
