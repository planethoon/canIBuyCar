import styled from "styled-components";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import StyledDiv from "./StyledDiv";
import StyledLink from "./StyledLink";
import axios from "axios";

const BookmarkWrapper = styled(StyledDiv)`
  border: 1px solid black;
  width: 85%;
  height: 85%;
  position: absolute;
  left: 50%;
  top: 53%;
  transform: translate(-50%, -50%);

  flex-wrap: wrap;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const InnerWrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const Bookmark = styled.li`
  display: flex;
  box-shadow: 0 0 5px black;
  border-radius: 5px;
  margin: 1rem;
  width: 90%;
  height: 6rem;
  background-color: white;
  list-style-type: none;
  flex-direction: row;
  justify-content: space-space-around;
  align-items: center;
  transition: 0.4s;

  &:hover {
    transition: 0.2s;
    box-shadow: 0 0 10px black;
  }

  > div {
    display: flex;
    justify-content: center;
    > div {
    }
  }

  > div.side {
    flex: 1 0 0;
    display: flex;
    justify-content: space-around;
  }
  > div.center {
    flex: 2 0 0;
    flex-direction: column;
    align-items: center;
  }
`;

const EmptyBookmark = styled.li`
  display: flex;
  border: 1px solid black;
  margin: 1rem;
  width: 90%;
  height: 6rem;
  background-color: white;
  flex-direction: column;
  overflow: hidden;

  > div {
    text-align: center;
  }
  > div.emptyTitle {
    margin: 0.8rem;
    margin-top: 1.5rem;
    font-size: 1.6rem;
  }
  > div.emptyText {
    padding: 0.3rem;
    transition: 0.4s;
    width: 100%;
    &:hover {
      transition: 0.4s;
      background-color: #5f5f5f;
    }
    > a {
      display: block;
      height: 100%;
      width: 100%;
      transition: 0.2s;
      &:hover {
        transition: 0.2s;
      }
    }
  }
`;

const BookmarkImg = styled.div`
  height: 5rem;
  width: 5rem;
  position: relative;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
  }
`;
const BookmarkCarInfo = styled(StyledDiv)`
  border: 1px solid blue;
  height: 2rem;
  width: 10rem;
  font-size: 1.2rem;
`;
const BookmarkDelete = styled.div`
  height: 2rem;
  width: 2rem;
  &:hover {
    cursor: pointer;
  }
  > i {
    color: green;
  }
  > i.fa-trash {
    color: red;
  }
`;

const BookmarkLink = styled(BookmarkDelete)``;

export default function Bookmarks() {
  const userInfo = useSelector((state) => state.userInfoReducer);
  const [bookmarkArr, setBookmarkArr] = useState([]);

  const getData = () => {
    const token = `Bearer ${userInfo.token}`;
    axios
      .get(
        `http://ec2-52-79-144-13.ap-northeast-2.compute.amazonaws.com:8080/bookmark/${userInfo.userId}`,
        { withCredentials: true, headers: { Authorization: token } }
      )
      .then((res) => {
        if (res.status === 200) {
          setBookmarkArr(res.data.data);
        }
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteHandler = (id) => {
    console.log("delete test");
    const token = `Bearer ${userInfo.token}`;

    axios
      .delete(
        `http://ec2-52-79-144-13.ap-northeast-2.compute.amazonaws.com:8080/bookmark/${id}`,
        { withCredentials: true, headers: { Authorization: token } }
      )
      .then((res) => {
        getData();
      });
  };

  return (
    <BookmarkWrapper>
      <InnerWrapper>
        {bookmarkArr.length ? (
          bookmarkArr.map((e) => {
            return (
              <Bookmark>
                <div className={"side"}>
                  <BookmarkImg className={"img"}>
                    <img src={e.img} />
                  </BookmarkImg>
                </div>
                <div className={"center"}>
                  <BookmarkCarInfo>
                    <span>{e.brand}</span>
                  </BookmarkCarInfo>
                  <BookmarkCarInfo>
                    <span>{e.name}</span>
                  </BookmarkCarInfo>
                </div>
                <div className={"side"}>
                  <Link
                    to={`/car/${e.brand.toLowerCase()}-${e.id}`}
                    onClick={() => {
                      localStorage.setItem("watching", e.id);
                    }}
                  >
                    <BookmarkLink>
                      <i class="fas fa-arrow-circle-right fa-2x"></i>
                    </BookmarkLink>
                  </Link>

                  <BookmarkDelete
                    onClick={() => {
                      deleteHandler(e.id);
                    }}
                  >
                    <i className={"fas fa-trash fa-2x"} />
                  </BookmarkDelete>
                </div>
              </Bookmark>
            );
          })
        ) : (
          <Empty />
        )}
      </InnerWrapper>
    </BookmarkWrapper>
  );
}

const Empty = () => {
  return (
    <EmptyBookmark>
      <div className={"emptyTitle"}>북마크가 비어있습니다.</div>
      <div className={"emptyText"}>
        <StyledLink to="/main">드림카 추가하러 가기</StyledLink>
      </div>
    </EmptyBookmark>
  );
};
