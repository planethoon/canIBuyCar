import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { useSelector, useDispatch } from "react-redux";
import { setInfo as setCarInfo } from "../modules/carInfo";
import { setInfo as setUserInfo } from "../modules/userInfo";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StyledDiv from "../components/StyledDiv";
import ContentContainer from "../components/ContentContainer";
import BookmarkButton from "../components/BookmarkButton";
import { getGukbab, getYear, getTimesForApt } from "../components/Calculations";
import axios from "axios";

const Background = styled.div`
  height: 100vh;
  background-color: grey;
`;

const Wrapper = styled(ContentContainer)`
  width: 70%;
  flex-direction: column;
`;

const CarImg = styled.div`
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

  > div.header {
    padding: 1rem;
    color: #5f5f5f;
    font-size: 1.2rem;
  }

  > div.body {
    padding: 1rem;
    color: white;
    font-size: 1.2rem;
  }
`;

const ResultContainer = styled(ContentContainer)`
  width: 30%;
  flex-direction: column;
`;

const Result = styled(StyledDiv)`
  border: 2px solid black;
  width: 90%;
  height: 70%;
  flex-direction: column;

  > div {
    margin: 1rem;
    padding: 1rem;
  }
`;

const Share = styled(StyledDiv)`
  border: 2px solid black;
  width: 90%;
  height: 20%;
  flex-direction: column;

  > div {
    margin: 10px;
    padding: 10px;
  }
`;

export default function Car() {
  const { carInfo, userInfo, isLogin } = useSelector((state) => ({
    carInfo: state.carInfoReducer,
    userInfo: state.userInfoReducer,
    isLogin: state.loginReducer,
  }));
  const dispatch = useDispatch();

  const [saving, setSaving] = useState(10);
  const [isShared, setIsShared] = useState(false);

  const { carId } = useParams();
  const brand = carId.split("-")[0];
  const id = carId.split("-")[1];

  useEffect(() => {
    axios.get(`http://localhost:8080/car?brand=${brand}`).then((res) => {
      const carData = res.data.data.carData.filter((e) => {
        return e.id === Number(id);
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
    }
  };

  const shareHandler = () => {
    const text = `클립보드 테스트`;
    navigator.clipboard.writeText(text);
    setIsShared(true);
  };

  return (
    <>
      <Background>
        <Navbar />
        <StyledDiv>
          <Wrapper>
            <CarImg>
              <img src={carInfo.img} alt="" />
              <BookmarkButton
                carId={carInfo.id}
                bookmark={userInfo.bookmark}
                accessToken={userInfo.token}
              />
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
              <input
                type="number"
                onKeyUp={(e) => {
                  savingHandler(e);
                }}
                min={0}
              />
              매 달 저축액을 입력하고 Enter를 입력해주세요.
              {saving === 0 ? (
                <div>
                  저축하지 않고 차 살 생각을 하시다니, 집이 좀 사시나봅니다.
                </div>
              ) : saving === carInfo.price ? (
                <div>
                  저축하실 필요가 없으시네요. <br />
                  지금 바로 FLEX하세요!
                </div>
              ) : (
                <>
                  <div>
                    당신은 {getYear(carInfo.price, saving)}년부터 돈을 모아야
                    했습니다.
                  </div>
                  <div>
                    그 돈으로 국밥을 먹었을때 {getGukbab(carInfo.price)}번은
                    먹을 수 있습니다.
                  </div>
                  <div>
                    하지만 그 큰 돈도 서울 아파트 평균 매매가의{" "}
                    {getTimesForApt(carInfo.price)}% 밖에 되지 않는군요.
                  </div>
                </>
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
                  >
                    다시 복사하기
                  </div>
                </>
              ) : (
                <div onClick={shareHandler}>클립보드에 복사하기</div>
              )}
            </Share>
          </ResultContainer>
        </StyledDiv>
      </Background>
      <Footer />
    </>
  );
}
