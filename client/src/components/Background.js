import styled, { keyframes } from "styled-components";

const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const Outer = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  position: absolute;
  z-index: -1;
`;

const Inner = styled(Outer)`
  /* background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab); */
  background: linear-gradient(-45deg, black, #333333, black, #111111);
  background-size: 400% 400%;
  animation: ${gradient} 15s ease infinite;
  z-index: -1;
`;

export default function Background() {
  return (
    <Outer>
      <Inner></Inner>
    </Outer>
  );
}
