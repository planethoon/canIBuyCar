import styled from "styled-components";
import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StyledDiv from "../components/StyledDiv";

const Background = styled.div`
  background-color: grey;
  height: 100vh;
`;

const LogoContainer = styled(StyledDiv)`
  height: 90vh;
  flex-direction: column;
`;

const LogoWrapper = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow: auto;
`;

const LogoOuter = styled.ul`
  margin: 2rem;
`;

const LogoBtn = styled.li`
  border: 2px solid black;
  height: 10rem;
  width: 10rem;
  flex: 1 1 auto;
`;

// const LogoImage = styled.img`
//   max-width: 100%;
// `

export default function Main() {
  // const [brandList, getBrandList] = useState();

  // useEffect(() => {
  //   axios.get("http://localhost:8080/brand").then((res) => {
  //     res.data
  //     getBrandList()
  //   });
  // });
  return (
    <>
      <Background>
        <Navbar />
        <LogoContainer>
          <LogoWrapper>
            {/* {brandList.map((brand)=>{
              return (
                <Link to="/brand">
                  <LogoBtn onClick={()=>{getSelectedBrand(brand.name)}}>
                    <LogoImage alt={brand.name} src={brand.img} />
                  </LogoBtn>
                </Link>
              )
            })} */}

            <LogoOuter>
              <Link to="/brand">
                <LogoBtn />
              </Link>
            </LogoOuter>
            <LogoOuter>
              <Link to="/brand">
                <LogoBtn />
              </Link>
            </LogoOuter>
            <LogoOuter>
              <Link to="/brand">
                <LogoBtn />
              </Link>
            </LogoOuter>
            <LogoOuter>
              <Link to="/brand">
                <LogoBtn />
              </Link>
            </LogoOuter>
            <LogoOuter>
              <Link to="/brand">
                <LogoBtn />
              </Link>
            </LogoOuter>
            <LogoOuter>
              <Link to="/brand">
                <LogoBtn />
              </Link>
            </LogoOuter>
            <LogoOuter>
              <Link to="/brand">
                <LogoBtn />
              </Link>
            </LogoOuter>
            <LogoOuter>
              <Link to="/brand">
                <LogoBtn />
              </Link>
            </LogoOuter>
            <LogoOuter>
              <Link to="/brand">
                <LogoBtn />
              </Link>
            </LogoOuter>
            <LogoOuter>
              <Link to="/brand">
                <LogoBtn />
              </Link>
            </LogoOuter>
            <LogoOuter>
              <Link to="/brand">
                <LogoBtn />
              </Link>
            </LogoOuter>
            <LogoOuter>
              <Link to="/brand">
                <LogoBtn />
              </Link>
            </LogoOuter>
          </LogoWrapper>
        </LogoContainer>
      </Background>
      <Footer />
    </>
  );
}
