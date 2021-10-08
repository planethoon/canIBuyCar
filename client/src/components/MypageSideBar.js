import styled from 'styled-components';
import StyledLink from './StyledLink';
import StyledDiv from './StyledDiv';

const Navbar = styled(StyledDiv)`
  flex-direction: column;
`;

const GreetingBox = styled(StyledDiv)`
  height: 10rem;
  width: 20rem;
  background-color: white;
  margin: 1rem;
`;

const EditUserInfoBox = styled(StyledDiv)`
  height: 3rem;
  width: 20rem;
  background-color: white;
  margin: 1rem;
`;

const FavoriteBox = styled(EditUserInfoBox)``;

export default function MypageSideBar() {
  return (
    <Navbar>
      <GreetingBox>환영합니다</GreetingBox>
      <EditUserInfoBox>
        <StyledLink to='/mypage/edit'>Edit</StyledLink>
      </EditUserInfoBox>
      <FavoriteBox>
        <FavoriteBox>
          <StyledLink to='/mypage/car'>Car List</StyledLink>
        </FavoriteBox>
      </FavoriteBox>
    </Navbar>
  );
}
