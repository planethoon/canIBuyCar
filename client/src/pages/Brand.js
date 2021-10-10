import styled from "styled-components";
import { useEffect, useState } from "react";

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
    bottom: 3px;
    right: 5px;
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

export default function Brand() {
  let backgroundimage = "https://via.placeholder.com/300x200";

  const [isLoading, getIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      getIsLoading(true);
    }, 1000);
  }, []);

  return (
    <>
      <Background>
        <Navbar />
        <StyledDiv>
          <SideContainer>
            <Logo>
              <img src={'https://via.placeholder.com/500'} alt='logo' />
            </Logo>
            <Search type='text' placeholder='찾고자 하는 차량을 입력해주세요.' />
            <BrandWrapper>
              <BrandList>
                <BrandName>
                  <span>현대</span>
                </BrandName>
              </BrandList>
            </BrandWrapper>
          </SideContainer>
          <CarContainer>
            {isLoading ? (
              <>
                <CarBox>
                  <Link to="/car">
                    <img src={backgroundimage} alt="" />
                  </Link>
                  <BookmarkButton />
                  <span>
                    <StyledLink to="/car">CarName</StyledLink>
                  </span>
                </CarBox>
                <CarBox>
                  <Link to="/car">
                    <img src={backgroundimage} alt="" />
                  </Link>
                  <BookmarkButton />
                  <span>
                    <StyledLink to="/car">CarName</StyledLink>
                  </span>
                </CarBox>
                <CarBox>
                  <Link to="/car">
                    <img src={backgroundimage} alt="" />
                  </Link>
                  <BookmarkButton />
                  <span>
                    <StyledLink to="/car">CarName</StyledLink>
                  </span>
                </CarBox>
                <CarBox>
                  <Link to="/car">
                    <img src={backgroundimage} alt="" />
                  </Link>
                  <BookmarkButton />
                  <span>
                    <StyledLink to="/car">CarName</StyledLink>
                  </span>
                </CarBox>
                <CarBox>
                  <Link to="/car">
                    <img src={backgroundimage} alt="" />
                  </Link>
                  <BookmarkButton />
                  <span>
                    <StyledLink to="/car">CarName</StyledLink>
                  </span>
                </CarBox>
                <CarBox>
                  <Link to="/car">
                    <img src={backgroundimage} alt="" />
                  </Link>
                  <BookmarkButton />
                  <span>
                    <StyledLink to="/car">CarName</StyledLink>
                  </span>
                </CarBox>
                <CarBox>
                  <Link to="/car">
                    <img src={backgroundimage} alt="" />
                  </Link>
                  <BookmarkButton />
                  <span>
                    <StyledLink to="/car">CarName</StyledLink>
                  </span>
                </CarBox>
                <CarBox>
                  <Link to="/car">
                    <img src={backgroundimage} alt="" />
                  </Link>
                  <BookmarkButton />
                  <span>
                    <StyledLink to="/car">CarName</StyledLink>
                  </span>
                </CarBox>
                <CarBox>
                  <Link to="/car">
                    <img src={backgroundimage} alt="" />
                  </Link>
                  <BookmarkButton />
                  <span>
                    <StyledLink to="/car">CarName</StyledLink>
                  </span>
                </CarBox>
                <CarBox>
                  <Link to="/car">
                    <img src={backgroundimage} alt="" />
                  </Link>
                  <BookmarkButton />
                  <span>
                    <StyledLink to="/car">CarName</StyledLink>
                  </span>
                </CarBox>
              </>
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
