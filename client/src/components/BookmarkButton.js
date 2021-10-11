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
  const [markId, getMarkId] = useState(0);

  const marked = bookmark.filter((e) => e.carId === carId);
  console.log(marked);
  useEffect(() => {
    if (marked.length) {
      getIsMarked(true);
      getMarkId(marked[0].bookmarkId);
    }
  }, []);

  const toggleHandler = () => {
    // const token = `Bearer ${accessToken}`
    const token = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0ZXN0QUBnbWFpbC5jb20iLCJ1c2VybmFtZSI6InRlc3RBIiwiY3JlYXRlZEF0IjoiMjAyMS0xMC0xMVQxMToyNjowNC4wMDBaIiwidXBkYXRlZEF0IjoiMjAyMS0xMC0xMVQxMToyNjowNC4wMDBaIiwiaWF0IjoxNjMzOTcyMzczLCJleHAiOjE2MzQyMzE1NzN9.MXQ9D8TDC_skkzZn9M2vzhqKf_jSztS7nb5E2W1GBe8`;
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
            getMarkId(res.data.data.bookmarkId);
          }
        });
    } else {
      axios
        .delete(`http://localhost:8080/bookmark/${markId}`, {
          withCredentials: true,
          headers: { Authorization: token },
        })
        .then((res) => {
          if (res.status === 204) {
            getIsMarked(false);
            getMarkId(0);
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
