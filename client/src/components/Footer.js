import styled from "styled-components";

const Outer = styled.div`
  background-color: black;
  height: 8rem;
  color: #fafafa;
  display: flex;
  justify-content: center;
  border-top: 1px solid;
  border-image: linear-gradient(to right, #000000, #555555, #000000);
  border-image-slice: 1;
`;

const Copyright = styled.div`
  background-color: black;
  height: 2rem;
  color: #5f5f5f;
  text-align: center;
  font-size: 0.85rem;
`;

const TitleContainer = styled.div`
  width: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.span`
  color: #fafafa;
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const TitleText = styled.span`
  color: #fafafa;
  font-size: 0.9rem;
`;

const InnerContainer = styled.div`
  width: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Guide = styled.span`
  color: #fafafa;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const Link = styled.a`
  color: #fafafa;
  text-decoration: none;
  &:hover {
    font-size: 1.05rem;
    transition: 0.8s;
  }
  transition: 0.2s;
`;

const Member = styled(Link)`
  margin: 0 0.5rem;
`;

const MemberContainer = styled.div`
  display: flex;
`;

export default function Footer() {
  return (
    <>
      <Outer>
        <TitleContainer>
          <Title>canIBuyCar</Title>
          <TitleText>서울특별시 서초구 서초동 서초대로 396</TitleText>
          <TitleText>Tel. 02-0000-0000</TitleText>
        </TitleContainer>
        <InnerContainer>
          <Guide>About Service</Guide>
          <Link href="https://github.com/codestates/canIBuyCar/wiki">
            canIBuyCar Wiki
          </Link>
        </InnerContainer>
        <InnerContainer>
          <Guide>About Us</Guide>
          <MemberContainer>
            <Member href="https://github.com/glen15">이정훈</Member>
            <Member href="https://github.com/ydh94">유대형</Member>
            <Member href="https://github.com/planethoon">신성훈</Member>
            <Member href="https://github.com/Eom-Hyejin">엄혜진</Member>
          </MemberContainer>
        </InnerContainer>
      </Outer>
      <Copyright>
        © Copyright 2021 Team MeltingBrain. All rights reserved.
      </Copyright>
    </>
  );
}

// 서울특별시 서초구 서초동 서초대로 396
// 서비스 소개
// 컨택트
