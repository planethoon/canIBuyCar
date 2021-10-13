import axios from "axios";
import { useEffect, useState, useReducer } from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";

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

export default function BookmarkButton({ carId, changed }) {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const userInfo = useSelector((state) => state.userInfoReducer);

  const [isMarked, getIsMarked] = useState(false);
  // console.log(bookmark);
  const marked = userInfo.bookmark.filter((e) => e.carId === carId);
  const accessToken = userInfo.token;

  console.log(carId, marked);

  useEffect(() => {
    if (marked.length) {
      console.log("이거 불림?");
      getIsMarked(true);
    }
  }, [marked]);

  const toggleHandler = () => {
    const token = `Bearer ${accessToken}`;
    if (!isMarked) {
      axios
        .post(
          "http:ec2-52-79-228-28.ap-northeast-2.compute.amazonaws.com:8080/bookmark",
          { carId },
          { withCredentials: true, headers: { authorization: token } }
        )
        .then((res) => {
          if (res.status === 200) {
            getIsMarked(true);
            changed();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .delete(
          `http:ec2-52-79-228-28.ap-northeast-2.compute.amazonaws.com:8080/bookmark/${carId}`,
          {
            withCredentials: true,
            headers: { authorization: token },
          }
        )
        .then((res) => {
          if (res.status === 204) {
            getIsMarked(false);
            changed();
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
