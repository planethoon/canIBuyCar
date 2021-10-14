import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { setInfo as setUserInfo } from "../modules/userInfo";

import markedIcon from "../img/marked.png";
import unmarkedIcon from "../img/unmarked.png";

const BookmarkWrapper = styled.div`
  height: 2rem;
  width: 2rem;

  > img {
    max-width: 100%;
    filter: drop-shadow(0 0 3px #fff);
  }
`;

export default function BookmarkButton({ brand, carId, page }) {
  const userInfo = useSelector((state) => state.userInfoReducer);
  const dispatch = useDispatch();

  const [isMarked, getIsMarked] = useState(false);
  const accessToken = userInfo.token;

  useEffect(() => {
    checkMarked();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkMarked = () => {
    axios
      .get(
        `http://ec2-52-79-144-13.ap-northeast-2.compute.amazonaws.com:8080/car?brand=${brand}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        const { bookmarkData } = res.data.data;
        const carUser = Number(localStorage.getItem("userId"));
        const carIdWatching =
          page === "car" ? Number(localStorage.getItem("watching")) : carId;
        const filtered = bookmarkData
          .filter((bookmark) => bookmark.userId === carUser)
          .filter((bookmark) => bookmark.carId === carIdWatching);
        return filtered;
      })
      .then((result) => {
        if (result.length) {
          getIsMarked(true);
        } else {
          getIsMarked(false);
        }
      });
  };

  const updateInfo = () => {
    axios
      .get(
        `http://ec2-52-79-144-13.ap-northeast-2.compute.amazonaws.com:8080/car?brand=${brand}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        const { bookmarkData } = res.data.data;
        const filtered = bookmarkData.filter(
          (e) => Number(e.userId) === Number(userInfo.userId)
        );
        dispatch(setUserInfo({ bookmark: filtered }));
        localStorage.setItem("bookmark", JSON.stringify(filtered));
      });
  };

  const toggleHandler = () => {
    const token = `Bearer ${accessToken}`;
    if (!isMarked) {
      axios
        .post(
          "http://ec2-52-79-144-13.ap-northeast-2.compute.amazonaws.com:8080/bookmark",
          { carId },
          { withCredentials: true, headers: { authorization: token } }
        )
        .then((res) => {
          if (res.status === 200) {
            getIsMarked(true);
            updateInfo();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .delete(
          `http://ec2-52-79-144-13.ap-northeast-2.compute.amazonaws.com:8080/bookmark/${carId}`,
          {
            withCredentials: true,
            headers: { authorization: token },
          }
        )
        .then((res) => {
          if (res.status === 204) {
            getIsMarked(false);
            updateInfo();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <BookmarkWrapper onClick={toggleHandler}>
      {isMarked ? (
        <img src={markedIcon} alt="" />
      ) : (
        <img src={unmarkedIcon} alt="" />
      )}
    </BookmarkWrapper>
  );
}
