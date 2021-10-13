import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";

import { getGukbab, getTimesForApt } from "../Calculations";
import { useSelector } from "react-redux";

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
  border-right: 0.15em solid black;
  white-space: wrap;
  margin: 0 auto;
  letter-spacing: 0.1em;
  text-align: center;
  animation: ${typing} 2.5s steps(30, end),
    ${blinkCaret} 0.75s step-end infinite;
`;

const Instance1 = styled(Typewriter)`
  animation-delay: 5s 5s;
`;

const GukbabWrapper = styled.div`
  border: 1px solid black;
  padding: 1rem;
  font-size: 1.2rem;
  width: 90%;
  max-height: 20rem;
`;

export default function ClientComment() {
  const carInfo = useSelector((state) => state.carInfoReducer);

  return (
    <div>
      <GukbabWrapper>
        <Typewriter>
          그 돈으로 국밥을 먹었을때
          <br />
          {getGukbab(carInfo.price)}번은 먹을 수 있습니다.
        </Typewriter>
      </GukbabWrapper>
      <div>
        <GukbabWrapper>
          <Instance1>
            하지만 그 큰 돈도
            <br /> 서울 아파트 평균 매매가의
            <br />
            {getTimesForApt(carInfo.price)}% 밖에 되지 않는군요.
          </Instance1>
        </GukbabWrapper>
      </div>
    </div>
  );
}
