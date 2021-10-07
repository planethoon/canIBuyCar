import Navbar from "../components/Navbar";
import styled from "styled-components";

const PageContainer = styled.div`
  background-color: grey;
`;

export default function Main() {
  return (
    <>
      <Navbar />
      <PageContainer>hello world</PageContainer>
    </>
  );
}
