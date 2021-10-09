
import { useState } from "react";
import styled from "styled-components";
import marked from "../img/marked.png";
import unmarked from "../img/unmarked.png";

const BookmarkWrapper = styled.div`
  height: 2rem;
  width: 2rem;
  > img {
    max-width: 100%;
  }
`;

export default function BookmarkButton() {
  const [isMarked, getIsMarked] = useState(false);

  const toggleHandler = () => {
    getIsMarked(!isMarked);
  };

  return (
    <>
      <BookmarkWrapper onClick={toggleHandler}>
        {isMarked ? <img src={marked} alt="" /> : <img src={unmarked} alt="" />}
      </BookmarkWrapper>
    </>
  );
}
