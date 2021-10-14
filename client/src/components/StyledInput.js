import styled from "styled-components";

const StyledInput = styled.input`
  font-size: 1rem;
  height: 3rem;
  width: 35rem;
  border: none;
  border-bottom: solid 1px #b3b3b3;
  background-color: #fafafa;
  &:focus {
    outline: none;
    border-bottom: solid 1px black;
  }
`;

export default StyledInput;
