import styled from "styled-components";
import StyledLink from "./StyledLink";
import StyledDiv from "./StyledDiv";
import ContentContainer from "../components/ContentContainer";

const Navbar = styled(ContentContainer)`
  flex: 1 0 10rem;
  flex-direction: column;
`;

const GreetingBox = styled(StyledDiv)`
  height: 10rem;
  width: 15rem;
  background-color: white;
  margin: 1rem;
  flex-direction: column;
`;

const EditUserInfoBox = styled(StyledDiv)`
  height: 3rem;
  width: 15rem;
  background-color: white;
  margin: 1rem;
`;

const FavoriteBox = styled(EditUserInfoBox)``;

export default function MypageSideBar({ handleAll }) {
  const userName = localStorage.getItem("userName");
  return (
    <Navbar>
      <GreetingBox>
        <StyledDiv>환영합니다</StyledDiv>
        <StyledDiv>{userName}님!</StyledDiv>
      </GreetingBox>
      <FavoriteBox>
        <StyledLink to="/mypage/car" onClick={handleAll}>
          즐겨찾기 목록
        </StyledLink>
      </FavoriteBox>
      <EditUserInfoBox>
        <StyledLink to="/mypage/edit" onClick={handleAll}>
          회원정보 수정
        </StyledLink>
      </EditUserInfoBox>
    </Navbar>
  );
}
