import styled from 'styled-components';

const StyledButton = styled.button`
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  width: 15rem;
  border: 0.1rem solid white;
  border-radius: 0.5rem;
  cursor: pointer;
  color: black;
  &:hover {
    color: white;
  }
`;

export default StyledButton;
