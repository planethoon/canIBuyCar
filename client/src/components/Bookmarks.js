import styled from "styled-components";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import StyledDiv from "./StyledDiv";
import axios from "axios";
import StyledButton from "./StyledButton";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { login } from "../modules/isLogin";
import { setInfo as setUserInfo } from "../modules/userInfo";

const BookmarkWrapper = styled(StyledDiv)`
  background-color: #fafafa;
  box-shadow: 0 0 5px black;
  border-radius: 10px;
  width: 85%;
  height: 85%;
  position: absolute;
  left: 50%;
  top: 50%;
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
  background-color: #fafafa;
  list-style-type: none;
  flex-direction: row;
  justify-content: space-around;
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
  box-shadow: 0 0 5px black;
  border-radius: 5px;
  margin: 1rem;
  width: 90%;
  height: 15rem;
  background-color: #fafafa;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  border-bottom: 1px solid #555555;
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
  > i.fa-arrow-circle-right {
    color: green;
  }
  > i.fa-trash {
    color: gray;
    :hover {
      color: red;
    }
  }
`;

const BookmarkLink = styled(BookmarkDelete)``;

export default function Bookmarks() {
  const userInfo = useSelector((state) => state.userInfoReducer);
  const [bookmarkArr, setBookmarkArr] = useState(
    JSON.parse(localStorage.getItem("mypagebm")) || []
  );

  const dispatch = useDispatch();

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
          localStorage.setItem("mypagebm", JSON.stringify(res.data.data));
        }
      });
  };

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
    getData();
    // eslint-disable-next-line
  }, []);

  const deleteHandler = (id) => {
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
                    <img src={e.img} alt="" />
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
                      <i className={"fas fa-arrow-circle-right fa-2x"}></i>
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
  const history = useHistory();
  return (
    <EmptyBookmark>
      <div className={"emptyTitle"}>북마크가 비어있습니다.</div>
      <div
        className={"emptyText"}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <StyledButton
          style={{
            width: "12rem",
            height: "4rem",
            fontSize: "0.9rem",
            marginTop: "2rem",
          }}
          onClick={() => history.push("/main")}
        >
          드림카 추가하러 가기
        </StyledButton>
      </div>
    </EmptyBookmark>
  );
};
