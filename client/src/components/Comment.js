import styled from "styled-components";
import StyledButton from "./StyledButton";
import StyledDiv from "./StyledDiv";
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../modules/isLogin";

const CommentBox = styled(StyledDiv)`
  border-bottom: solid 1px black;
  width: 70vw;
  height: 8vh;
`;

const TextBox = styled(StyledDiv)`
  background-color: white;
  width: 30vw;
  flex: 5 1 auto;
  height: 7vh;
`;

const ButtonBox = styled(StyledDiv)`
  background-color: white;
  width: 5vw;
  flex: 1 1 auto;
  height: 8vh;
`;

const LikeBtn = styled(StyledButton)`
  width: 4rem;
  height: 1rem;
`;

const DeleteBtn = styled(LikeBtn)`
  background-color: yellow;
`;

export default function Comment({
  content,
  userId,
  postId,
  likes,
  isChecked,
  handleComments,
}) {
  const [like, setLike] = useState(likes);
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("userId");
  const isValid = +id === userId;
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState(isChecked);

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
      .then(() => handleComments())
      .catch((err) => console.log(err));
  };

  useEffect(() => {
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
          <LikeBtn onClick={handleLike}>좋아요{like}</LikeBtn>
        ) : (
          <DeleteBtn onClick={handleUnlike}>좋아요{like}</DeleteBtn>
        )}
        {isValid ? <LikeBtn onClick={handleDelete}>삭제</LikeBtn> : null}
      </ButtonBox>
    </CommentBox>
  );
}
