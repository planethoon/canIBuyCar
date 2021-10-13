import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
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

export default function BookmarkButton({
  carId,
  bookmark,
  accessToken,
  changed,
}) {
  const [isMarked, getIsMarked] = useState(false);
  const marked = bookmark.filter((e) => e.carId === carId);

  useEffect(() => {
    if (marked.length) {
      getIsMarked(true);
    }
  }, []);

  const toggleHandler = () => {
    const token = `Bearer ${accessToken}`;
    if (!isMarked) {
      axios
        .post(
          "http:ec2-52-79-228-28.ap-northeast-2.compute.amazonaws.com:8080/bookmark",
          { carId },
          { withCredentials: true, headers: { Authorization: token } }
        )
        .then((res) => {
          if (res.status === 200) {
            getIsMarked(true);
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
            headers: { Authorization: token },
          }
        )
        .then((res) => {
          if (res.status === 204) {
            getIsMarked(false);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    changed();
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
