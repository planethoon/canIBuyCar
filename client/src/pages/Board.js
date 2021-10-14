import styled from "styled-components";
import StyledButton from "../components/StyledButton";
import StyledDiv from "../components/StyledDiv";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StyledInput from "../components/StyledInput";
import Comment from "../components/Comment";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../modules/isLogin";

const Background = styled.div`
  height: 100vh;
  background-color: black;
`;

const PageContainer = styled(StyledDiv)`
  flex-direction: column;
`;

const InputContainer = styled(StyledDiv)`
  width: 70vw;
  height: 20vh;
  flex-direction: column;
  /* color: white; */
  background-color: white;
  border: black 1px solid;
  margin: 1rem;
`;

const RequestInput = styled(StyledInput)`
  width: 50vw;
  height: 4.3rem;
`;

const AddBtn = styled(StyledButton)``;

const CommentsContainer = styled(StyledDiv)`
  width: 70vw;
  height: 70vh;
  background-color: white;
  border: black 1px solid;
  flex-direction: column-reverse;
  justify-content: flex-end;
`;

export default function Board() {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");
  const [message, setMessage] = useState(
    "차 정보 추가요청, 사용후기 등 한줄 의견을 남겨주세요!"
  );

  const [likeData, setLikeData] = useState([]);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const isLogin = useSelector((state) => state.loginReducer);
  const userId = localStorage.getItem("userId");

  const check = (arr) => {
    for (let el of arr) {
      for (let e of el) {
        if (e.userId === +userId) return true;
      }
    }
    return false;
  };

  const handleInputValue = (e) => {
    setText(e.target.value);
  };

  const handleAdd = () => {
    if (!isLogin) {
      setMessage(
        "비회원은 게시글 조회만 가능합니다. 로그인이 필요한 서비스입니다."
      );
    } else {
      axios
        .post(
          "http://ec2-52-79-144-13.ap-northeast-2.compute.amazonaws.com:8080/board",
          { text },
          { headers: { authorization: `Bearer ${token}` } }
        )
        .then((res) => {
          handleComments();
          setText("");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleComments = () => {
    axios
      .get(
        "http://ec2-52-79-144-13.ap-northeast-2.compute.amazonaws.com:8080/board"
      )
      .then((res) => {
        setLikeData(res.data.data.likeData.filter((e) => e.length > 0));
        setComments(res.data.data.commentsData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleKeyPress = (e) => {
    if (e.type === "keypress" && e.code === "Enter") {
      handleAdd();
    }
  };

  useEffect(() => {
    if (token) {
      dispatch(login());
    }
    handleComments();
  }, []);

  return (
    <>
      <Background>
        <Navbar />
        <PageContainer>
          <InputContainer>
            <StyledDiv>{message}</StyledDiv>
            <StyledDiv>
              <RequestInput
                value={text}
                onChange={handleInputValue}
                onKeyPress={handleKeyPress}
              />
              <AddBtn onClick={handleAdd}>등록</AddBtn>
            </StyledDiv>
          </InputContainer>
          <CommentsContainer>
            {comments.map((e, index) => (
              <Comment
                key={index}
                content={e.text}
                userId={e.userId}
                postId={e.id}
                handleComments={handleComments}
                likes={likeData.filter((el) => el[0].commentId === e.id)}
                isChecked={check(
                  likeData.filter((el) => el[0].commentId === e.id)
                )}
              />
            ))}
          </CommentsContainer>
        </PageContainer>
      </Background>
      <Footer />
    </>
  );
}
