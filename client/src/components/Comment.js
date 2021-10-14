import styled from "styled-components";
import StyledButton from "./StyledButton";
import StyledDiv from "./StyledDiv";
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../modules/isLogin";

const CommentBox = styled.li`
  width: 70vw;
  height: 10vh;
  display: flex;
`;

const TextBox = styled(StyledDiv)`
  background-color: gainsboro;
  width: 30vw;
  flex: 4 1 auto;
  height: 8vh;
  font-size: 1.5rem;
`;

const ButtonBox = styled(StyledDiv)`
  background-color: gainsboro;
  width: 5vw;
  flex: 1 1 auto;
  height: 8vh;
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
        `http://ec2-52-79-144-13.ap-northeast-2.compute.amazonaws.com:8080/comment/${postId}`,
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
        `http://ec2-52-79-144-13.ap-northeast-2.compute.amazonaws.com:8080/comment/${postId}`,
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
        `http://ec2-52-79-144-13.ap-northeast-2.compute.amazonaws.com:8080/board/${postId}`,
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
  }, []);

  return (
    <CommentBox>
      <TextBox>{content}</TextBox>
      <ButtonBox>
        {!isClicked ? (
          <>
            <i
              className={"fa fa-thumbs-up fa-2x"}
              onClick={handleLike}
              style={{ cursor: "pointer", color: "gray" }}
            ></i>
            <span style={{ width: "1rem", margin: "1rem" }}>{like}</span>
          </>
        ) : (
          <>
            <i
              className={"fa fa-thumbs-up fa-2x"}
              onClick={handleUnlike}
              style={{ cursor: "pointer", color: "skyblue" }}
            ></i>
            <span style={{ width: "1rem", margin: "1rem" }}>{like}</span>
          </>
        )}
        {isValid ? (
          <i
            onClick={handleDelete}
            className={"fas fa-trash fa-2x"}
            style={{ cursor: "pointer", margin: "0.5rem", color: "red" }}
          ></i>
        ) : (
          <i
            className={"fas fa-trash fa-2x"}
            style={{ color: "gray", margin: "0.5rem" }}
          ></i>
        )}
      </ButtonBox>
    </CommentBox>
  );
}
