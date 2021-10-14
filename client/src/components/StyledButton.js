import styled from "styled-components";

const StyledButton = styled.button`
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  width: 15rem;
  border-radius: 0.5rem;
  background: #ededed;
  box-shadow: inset -9px -9px 18px #e6e6e6, inset 9px 9px 18px #f4f4f4;
  border: none;
  cursor: pointer;
  color: gray;
  &:hover {
    color: black;
  }
`;

export default StyledButton;
