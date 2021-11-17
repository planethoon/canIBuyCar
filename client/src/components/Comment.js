import styled from "styled-components";
import StyledDiv from "./StyledDiv";
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../modules/isLogin";

const CommentBox = styled.li`
  width: 70vw;
  height: 10vh;
  display: flex;
  border-radius: 1rem;
  background-color: #fafafa;
  margin: 0.5rem;
`;

const TextBox = styled(StyledDiv)`
  width: 30vw;
  flex: 4 1 auto;
  font-size: 1.2rem;
  overflow: auto;
`;

const ButtonBox = styled(StyledDiv)`
  width: 5vw;
  flex: 1 1 auto;
  > i.fa-trash {
    cursor: pointer;
    color: gray;
    :hover {
      color: red;
    }
  }
  > i.fa-thumbs-up {
    cursor: pointer;
    color: gray;
    :hover {
      color: skyblue;
    }
  }
`;

export default function Comment({
  content,
  userId,
  postId,
  likes,
  isChecked,
  handleComments,
}) {
  const [like, setLike] = useState([]);
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("userId");
  const isValid = +id === userId;
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState(isChecked);

  const checkLikes = (arr) => {
    if (likes.length) {
      setLike(likes[0].length);
    } else {
      setLike(0);
    }
  };

  const handleLike = () => {
    axios
      .post(
        `http://ec2-13-125-41-226.ap-northeast-2.compute.amazonaws.com:8080/comment/${postId}`,
        null,
        {
          headers: { authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        setLike(res.data.data.userData.length);
        setIsClicked(true);
      })
      .catch((err) => console.log(err));
  };

  const handleUnlike = () => {
    axios
      .delete(
        `http://ec2-13-125-41-226.ap-northeast-2.compute.amazonaws.com:8080/comment/${postId}`,
        { headers: { authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        setLike(res.data.data.userData.length);
        setIsClicked(false);
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = () => {
    axios
      .delete(
        `http://ec2-13-125-41-226.ap-northeast-2.compute.amazonaws.com:8080/board/${postId}`,
        { headers: { authorization: `Bearer ${token}` } }
      )
      .then((res) => handleComments())
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    checkLikes(likes);
    if (token) {
      dispatch(login());
    } else {
      setIsClicked(false);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <CommentBox>
      <TextBox>{content}</TextBox>
      <ButtonBox>
        {!isClicked ? (
          <>
            <i className={"fa fa-thumbs-up fa-2x"} onClick={handleLike}></i>
            <span
              style={{
                width: "1rem",
                margin: "1rem",
                fontSize: "1.5rem",
              }}
            >
              {like}
            </span>
          </>
        ) : (
          <>
            <i
              className={"fa fa-thumbs-up fa-2x"}
              onClick={handleUnlike}
              style={{ color: "skyblue" }}
            ></i>
            <span
              style={{
                width: "1rem",
                margin: "1rem",
                fontSize: "1.5rem",
                color: "skyblue",
                fontWeight: "bold",
              }}
            >
              {like}
            </span>
          </>
        )}
        {isValid ? (
          <i onClick={handleDelete} className={"fas fa-trash fa-2x"}></i>
        ) : (
          <i
            className={"fas fa-trash fa-2x"}
            style={{ display: "none", margin: "0.5rem" }}
          ></i>
        )}
      </ButtonBox>
    </CommentBox>
  );
}
