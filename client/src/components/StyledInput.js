import styled from "styled-components";

const StyledInput = styled.input`
  font-size: 1rem;
  height: 2.5rem;
  width: 35rem;
  border: none;
  border-bottom: solid 1px #b3b3b3;
  background-color: #fafafa;
  transition: 0.4s;
  &:focus {
    transition: 0.2s;
    outline: none;
    border-bottom: solid 1px black;
  }
`;

export default StyledInput;
