import styled from 'styled-components';
import StyledLink from './StyledLink';
import StyledDiv from './StyledDiv';
import ContentContainer from '../components/ContentContainer';

const Navbar = styled(ContentContainer)`
  flex: 1 0 10rem;
  flex-direction: column;
`;

const GreetingBox = styled(StyledDiv)`
  height: 10rem;
  width: 15rem;
  background-color: white;
  margin: 1rem;
`;

const EditUserInfoBox = styled(StyledDiv)`
  height: 3rem;
  width: 15rem;
  background-color: white;
  margin: 1rem;
`;

const FavoriteBox = styled(EditUserInfoBox)``;

export default function MypageSideBar() {
  return (
    <Navbar>
      <GreetingBox>환영합니다</GreetingBox>
      <FavoriteBox>
        <StyledLink to='/mypage/car'>Car List</StyledLink>
      </FavoriteBox>
      <EditUserInfoBox>
        <StyledLink to='/mypage/edit'>Edit</StyledLink>
      </EditUserInfoBox>
    </Navbar>
  );
}
