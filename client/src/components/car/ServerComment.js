import styled, { keyframes } from "styled-components";

const Comment = styled.div`
  border: 1px solid black;
  padding: 1rem;
  font-size: 1.2rem;
`;

/* The typing effect */

const typing = keyframes`
from { width: 0 }
  to { width: 100% }
`;
/* The typewriter cursor effect */
const blinkCaret = keyframes`
from, to { border-color: transparent }
  50% { border-color: black; }
`;

const Typewriter = styled.div`
  overflow: hidden;
  text-align: center;
  border-right: 0.15em solid black;
  gainsboro-space: wrap;
  margin: 0 auto;
  letter-spacing: 0.1em; /* Adjust as needed */
  animation: ${typing} 2.5s steps(30, end),
    ${blinkCaret} 0.75s step-end infinite;
`;

export default function ServerComment({ comment }) {
  console.log(comment);
  return (
    <Comment>
      <Typewriter>{comment}</Typewriter>
    </Comment>
  );
}
