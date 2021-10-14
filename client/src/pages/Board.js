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
import Background from "../components/Background";

const BackgroundOuter = styled.div`
  height: 100vh;
  position: relative;
  z-index: 0;
`;

const PageContainer = styled(StyledDiv)`
  flex-direction: column;
  height: 10rem;
`;

const RequestInput = styled(StyledInput)`
  height: 3rem;
`;

const AddBtn = styled(StyledButton)`
  height: 3.5rem;
  width: 8rem;
`;

const ErrorBox = styled(StyledDiv)`
  color: red;
`;

const CommentsContainer = styled(StyledDiv)`
  width: 85%;
  height: 70%;
  position: absolute;
  left: 50%;
  top: 62.5%;
  transform: translate(-50%, -50%);
  flex-wrap: wrap;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const InnerWrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: space-evenly;
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
      if (!text.length) {
        setMessage("메시지를 입력해주세요.");
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
      <BackgroundOuter>
        <Background />
        <Navbar />
        <PageContainer>
          <StyledDiv>
            <RequestInput
              value={text}
              onChange={handleInputValue}
              onKeyPress={handleKeyPress}
            />

            <AddBtn onClick={handleAdd}>등록</AddBtn>
          </StyledDiv>
          {message ===
          "차 정보 추가요청, 사용후기 등 한줄 의견을 남겨주세요!" ? (
            <StyledDiv style={{ color: "white" }}> {message} </StyledDiv>
          ) : message.length ? (
            <ErrorBox>{message}</ErrorBox>
          ) : null}

          <CommentsContainer>
            <InnerWrapper>
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
            </InnerWrapper>
          </CommentsContainer>
        </PageContainer>
      </BackgroundOuter>
      <Footer />
    </>
  );
}
