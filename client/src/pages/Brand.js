import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

//redux
import { useSelector, useDispatch } from "react-redux";
import { getInfo as getBrandInfo } from "../modules/brand";
import { getInfo as getUserInfo } from "../modules/userInfo";
import { getInfo as getCarInfo } from "../modules/carInfo";
import { logo } from "../img/brandLogo";

import Navbar from "../components/Navbar";
import LoadingIndicator from "../components/LoadingIndicator";
import Footer from "../components/Footer";
import StyledDiv from "../components/StyledDiv";
import ContentContainer from "../components/ContentContainer";
import BookmarkButton from "../components/BookmarkButton";
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

const Search = styled.input`
  height: 2rem;
  width: 80%;
  margin-bottom: 1rem;
  text-align: center;
`;

const BrandWrapper = styled.div`
  border: 3px solid black;
  height: 55%;
  width: 80%;
  overflow-y: auto;
  overflow-x: hidden;
`;

const BrandList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BrandName = styled.li`
  background-color: white;
  border: 1px solid black;
  width: 100%;
  height: 1.5rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: grey;
  }
  > span {
    padding-top: 0.2rem;
  }
  > div {
    height: 1.2rem;
    width: 1.2rem;
    border: 1px solid black;
  }
  > div > img {
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
  const [isLoading, getIsLoading] = useState(true);

  const { selected } = useParams();

  const { isLogin, brand, userInfo, carInfo } = useSelector((state) => ({
    isLogin: state.loginReducer,
    brand: state.brandReducer,
    userInfo: state.userInfoReducer,
    carInfo: state.carInfoReducer,
  }));

  const dispatch = useDispatch();

  const setLogo = (brand) => {
    return logo.filter((e) => e[0] === brand)[0][1];
  };
  // console.log(brand);
  useEffect(() => {
    // 회원 정보 확인
    axios.get(`http://localhost:8080/`);

    // 데이터 표기
    axios
      .get(`http://localhost:8080/car?brand=${selected}`, {
        withCredentials: true,
      })
      .then((res) => {
        const { carData, bookmarkData } = res.data.data;
        if (!isLogin) {
          const filtered = bookmarkData.filter(
            (e) => e.userId === userInfo.userId
          );
          console.log(filtered);
          dispatch(getUserInfo({ bookmark: filtered }));
        }
        dispatch(getBrandInfo(carData));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Background>
        <Navbar />
        <StyledDiv>
          <SideContainer>
            <Logo>
              <img src={setLogo(selected)} alt="logo" />
            </Logo>
            <Search
              type="text"
              placeholder="찾고자 하는 차량을 입력해주세요."
            />
            <BrandWrapper>
              <BrandList>
                <BrandName>
                  <span>Hyundai</span>
                </BrandName>
              </BrandList>
            </BrandWrapper>
          </SideContainer>
          <CarContainer>
            {isLoading ? (
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
