import styled from "styled-components";
import StyledLink from "./StyledLink";
import StyledDiv from "./StyledDiv";
import ContentContainer from "../components/ContentContainer";

const Navbar = styled(ContentContainer)`
  flex: 1 0 10rem;
  flex-direction: column;
  > a:hover {
    color: #555555;
  }
`;

const GreetingBox = styled(StyledDiv)`
  height: 10rem;
  width: 15rem;
  background-color: #fafafa;
  margin: 1rem;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 0 5px white;
  line-height: 1.5;
  letter-spacing: 0.1rem;
`;

const EditUserInfoBox = styled(StyledDiv)`
  height: 3rem;
  width: 15rem;
  background-color: #fafafa;
  margin: 1rem;
  box-shadow: 0 0 5px white;
  border-radius: 10px;
  transition: 0.4s;

  &:hover {
    box-shadow: 0 0 20px white;
    transition: 0.2s;
  }
`;

const FavoriteBox = styled(EditUserInfoBox)``;

export default function MypageSideBar({ handleAll }) {
  const userName = localStorage.getItem("userName");
  return (
    <Navbar>
      <GreetingBox>
        <StyledDiv>반갑습니다</StyledDiv>
        <StyledDiv>{userName}님✨</StyledDiv>
      </GreetingBox>
      <StyledLink to="/mypage/bookmark" onClick={handleAll}>
        <FavoriteBox>즐겨찾기 목록</FavoriteBox>
      </StyledLink>
      <StyledLink to="/mypage/edit" onClick={handleAll}>
        <EditUserInfoBox>회원정보 수정</EditUserInfoBox>
      </StyledLink>
    </Navbar>
  );
}
