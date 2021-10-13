import styled from "styled-components";
import StyledButton from "./StyledButton";
import StyledDiv from "./StyledDiv";
import axios from "axios";

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

const DeleteBtn = styled(LikeBtn)``;

export default function Comment({ content, userId, postId, handleComments }) {
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("userId");
  const isValid = +id === userId;
  const handleDelete = () => {
    axios
      .delete(
        `http://ec2-52-79-228-28.ap-northeast-2.compute.amazonaws.com:8080/board/${postId}`,
        { headers: { authorization: `Bearer ${token}` } }
      )
      .then((res) => handleComments())
      .catch((err) => console.log(err));
  };

  const handleLike = () => {
    axios
      .post(
        `http://ec2-52-79-228-28.ap-northeast-2.compute.amazonaws.com:8080/comment/:${postId}`,
        null,
        {
          headers: { authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleUnlike = () => {
    axios
      .delete(
        `http://ec2-52-79-228-28.ap-northeast-2.compute.amazonaws.com:8080/comment/:${postId}`,
        { headers: { authorization: `Bearer ${token}` } }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <CommentBox>
      <TextBox>{content}</TextBox>
      <ButtonBox>
        <LikeBtn onClick={handleLike}>좋아요</LikeBtn>
        {isValid ? <DeleteBtn onClick={handleDelete}>삭제</DeleteBtn> : null}
      </ButtonBox>
    </CommentBox>
  );
}
