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
  }
`;

export default function BookmarkButton({ carId, bookmark, accessToken }) {
  // console.log("북마크", carId);
  const [isMarked, getIsMarked] = useState(false);
  // console.log(bookmark);
  const marked = bookmark.filter((e) => e.carId === carId);
  // console.log(marked);
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
          "http://localhost:8080/bookmark",
          { carId },
          { withCredentials: true, headers: { Authorization: token } }
        )
        .then((res) => {
          if (res.status === 200) {
            getIsMarked(true);
          }
        });
    } else {
      axios
        .delete(`http://localhost:8080/bookmark/${carId}`, {
          withCredentials: true,
          headers: { Authorization: token },
        })
        .then((res) => {
          if (res.status === 204) {
            getIsMarked(false);
          }
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
