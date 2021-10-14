import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { useSelector, useDispatch } from "react-redux";
import { setInfo as setCarInfo } from "../modules/carInfo";
import { setInfo as setUserInfo } from "../modules/userInfo";
import { login } from "../modules/isLogin";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StyledDiv from "../components/StyledDiv";
import ContentContainer from "../components/ContentContainer";
import BookmarkButton from "../components/BookmarkButton";
import ClientComment from "../components/car/ClientComment";
import ServerComment from "../components/car/ServerComment";
import { getYear } from "../components/Calculations";
import axios from "axios";
import Background from "../components/Background";

const BackgroundOuter = styled.div`
  height: 100vh;
  position: relative;
  z-index: 0;
`;

const Wrapper = styled(ContentContainer)`
  width: 70%;
  flex-direction: column;
`;

const CarImg = styled.div`
  border: 5px solid gainsboro;
  border-bottom: none;
  height: 85vh;
  width: 90%;
  margin-top: 2rem;
  overflow: auto;
  position: relative;
  overflow: hidden;

  // 차 이미지
  > img {
    position: absolute;
    z-index: 2;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  // 북마크
  > div {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
  }
`;

const InfoContainer = styled(StyledDiv)`
  width: 90%;
  margin-bottom: 2rem;
  background-color: black;
  border: 5px solid gainsboro;
  border-top: none;
  box-shadow: 0 0 30px gainsboro;

  > div.header {
    padding: 1rem;
    color: #5f5f5f;
    font-size: 1.2rem;
  }

  > div.body {
    padding: 1rem;
    color: gainsboro;
    font-size: 1.2rem;
  }
`;

const ResultContainer = styled(ContentContainer)`
  width: 30%;
  flex-direction: column;
`;

const Result = styled(StyledDiv)`
  background-color: gainsboro;
  border-radius: 10px 10px 0 0;
  box-shadow: 0 0 10px gainsboro;
  width: 90%;
  height: 70%;
  flex-direction: column;
  /* overflow: hidden; */

  > div {
    margin: 1rem;
    padding: 1rem;
    border: 1px solid black;
  }
`;

const Share = styled(StyledDiv)`
  background-color: gainsboro;
  box-shadow: 0 0 10px gainsboro;

  border-radius: 0 0 10px 10px;
  width: 90%;
  height: 20%;
  flex-direction: column;

  > div {
    border: 1px solid black;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
    &:hover {
      cursor: default;
    }
    &.btn:hover {
      cursor: pointer;
    }
  }
`;

const InputWrapper = styled.div`
  background-color: gainsboro;
  > div {
    text-align: center;
    font-size: 1.2rem;
  }
  > div > input {
    width: 40%;
    height: 1.5rem;
    font-size: 1.3rem;
    text-align: center;
    border: none;
    border-bottom: 1px solid black;

    &:focus {
      outline: none;
    }
  }
`;

const ResultWrapper = styled(StyledDiv)`
  flex-direction: column;
  overflow: hidden;
  > div.saving {
    font-size: 1.2rem;
  }
`;

export default function Car() {
  const { carInfo, userInfo, isLogin } = useSelector((state) => ({
    carInfo: state.carInfoReducer,
    userInfo: state.userInfoReducer,
    isLogin: state.loginReducer,
  }));
  const dispatch = useDispatch();

  const [isShared, setIsShared] = useState(false);

  const { carId } = useParams();
  const brand = carId.split("-")[0];
  const id = carId.split("-")[1];

  useEffect(() => {
    const { token, userId, userName } = {
      token: localStorage.getItem("token"),
      userId: JSON.parse(localStorage.getItem("userId")),
      userName: localStorage.getItem("userName"),
    };
    if (token) {
      dispatch(login());
      dispatch(setUserInfo({ token, userId, userName }));
    }

    axios
      .get(
        `http://ec2-52-79-144-13.ap-northeast-2.compute.amazonaws.com:8080/car?brand=${brand}`
      )
      .then((res) => {
        const carData = res.data.data.carData.filter((e) => {
          return Number(e.id) === Number(id);
        });

        const bookmarkData = res.data.data.bookmarkData;

        if (isLogin) {
          const filtered = bookmarkData.filter(
            (e) => e.userId === userInfo.userId
          );
          dispatch(setUserInfo({ bookmark: filtered }));
        }
        dispatch(setCarInfo(carData[0]));
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getPrice = (price) => {
    return String(price).length > 4
      ? `${String(price).slice(0, -4)}억 ${String(price).slice(-4)}만원`
      : `${String(price)}만원`;
  };

  const savingHandler = (e) => {
    if (e.key === "Enter") {
      if (e.target.value <= 0) {
        e.target.value = 0;
      } else if (e.target.value >= carInfo.price) {
        e.target.value = carInfo.price;
      }
      setSaving(Number(e.target.value));
      getComment(getYear(carInfo.price, e.target.value));
    }
  };

  const [saving, setSaving] = useState(10);
  const [comment, setComment] = useState("default");
  const getComment = (price) => {
    axios
      .get(
        `http://ec2-52-79-144-13.ap-northeast-2.compute.amazonaws.com:8080/result?year=${price}`
      )
      .then((res) => {
        setComment(res.data.text);
      });
  };

  const shareHandler = () => {
    const text = `클립보드 테스트`;
    navigator.clipboard.writeText(text);
    setIsShared(true);
  };

  return (
    <>
      <BackgroundOuter>
        <Background />
        <Navbar />
        <StyledDiv>
          <Wrapper>
            <CarImg>
              <img src={carInfo.img} alt="" />
              <BookmarkButton brand={brand} page={"car"} carId={carInfo.id} />
            </CarImg>
            <InfoContainer>
              <div className="header">차량명</div>
              <div className="body">{carInfo.name}</div>
              <div className="header">차종</div>
              <div className="body">{carInfo.type}</div>
              <div className="header">가격</div>
              <div className="body">{getPrice(carInfo.price)}</div>
            </InfoContainer>
          </Wrapper>

          <ResultContainer>
            <Result>
              <InputWrapper>
                <div>매달 저축하실 금액을 입력해주세요.</div>
                <div>
                  <input
                    type="number"
                    onKeyUp={(e) => {
                      savingHandler(e);
                    }}
                    min={0}
                  />
                  만원
                </div>
              </InputWrapper>
              {comment === "default" ? (
                <div>매 달 저축액을 입력하고 Enter를 입력해주세요.</div>
              ) : saving === 0 ? (
                <div>
                  저축하지 않고 차 살 생각을 하시다니,
                  <br /> 집이 좀 사시나봅니다.
                </div>
              ) : saving === carInfo.price ? (
                <div>
                  저축하실 필요가 없으시네요. <br />
                  지금 바로 FLEX하세요!
                </div>
              ) : (
                <ResultWrapper>
                  <div
                    className={"saving"}
                  >{`${saving}만원을 매달 저금한다면`}</div>
                  <ServerComment comment={comment} />
                  <ClientComment />
                </ResultWrapper>
              )}
            </Result>
            <Share>
              {isShared ? (
                <>
                  <div>클립보드에 복사되었습니다.</div>
                  <div
                    onClick={() => {
                      setIsShared(false);
                    }}
                    className={"btn"}
                  >
                    다시 복사하기
                  </div>
                </>
              ) : (
                <div className={"btn"} onClick={shareHandler}>
                  클립보드에 복사하기
                </div>
              )}
            </Share>
          </ResultContainer>
        </StyledDiv>
      </BackgroundOuter>
      <Footer />
    </>
  );
}
