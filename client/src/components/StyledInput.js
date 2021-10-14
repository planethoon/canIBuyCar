import styled from "styled-components";

const StyledInput = styled.input`
  font-size: 1.5rem;
  height: 3rem;
  width: 35rem;
  border: none;
  border-bottom: solid 2px whitesmoke;
  &:focus {
    outline: none;
    border-bottom: solid 2px black;
  }
`;

export default StyledInput;
