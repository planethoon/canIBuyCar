import styled from "styled-components";
import StyledLink from "../StyledLink";

const BrandWrapper = styled.div`
  margin-top: 1rem;
  box-shadow: 0 0 5px black;
  border-radius: 10px;
  height: 55%;
  width: 80%;
  overflow-y: auto;
  overflow-x: hidden;
  transition: 0.4s;
  &:hover {
    box-shadow: 0 0 15px black;
    transition: 0.2s;
  }
`;

const BrandList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const LinkList = styled(StyledLink)`
  width: 100%;
`;

const BrandName = styled.li`
  background-color: white;
  border-bottom: 1px solid #aaaaaa;
  width: 100%;
  height: 1.5rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;

  &:hover {
    background-color: grey;
    transition: 0.1s;
  }
  > span {
    padding-top: 0.2rem;
  }
  > div {
    height: 1.2rem;
    width: 1.2rem;
    margin-right: 0.3rem;
  }
  > div > img {
    max-width: 100%;
    border-radius: 50%;
    box-shadow: 0 0 5px #fff;
  }
`;

export default function SideMenu({ selected, logo }) {
  const filtered = logo.filter((e) => e !== selected);

  return (
    <BrandWrapper>
      <BrandList>
        {filtered.map((e) => {
          let brandName = e[0];
          if (brandName === "renaultsamsung") {
            brandName = "RENAULT-SAMSUNG";
          } else if (brandName === "benz") {
            brandName = "Mercedes-Benz";
          } else if (brandName === "cadillac") {
            brandName = "Cadillac";
          } else {
            brandName = brandName.toUpperCase();
          }
          return (
            <LinkList to={`/brand/${e[0]}`} key={e[0]}>
              <BrandName>
                <div>
                  <img src={e[1]} />
                </div>
                <span>{brandName}</span>
              </BrandName>
            </LinkList>
          );
        })}
      </BrandList>
    </BrandWrapper>
  );
}
