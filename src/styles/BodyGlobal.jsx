import React from 'react';
import styled from 'styled-components';

export default function BodyGlobal({ children }) {
  return <BodyGlobalOuter>{children}</BodyGlobalOuter>;
}

const BodyGlobalOuter = styled.div`
  /* 가이드라인, 필요시 on,off */
  /* box-shadow: inset 0px 0px 3px 1px rgb(0, 38, 255); */
  /* margin: 4.8rem; */
  height: 83.5vh;
  overflow: scroll;
  margin: 4.8rem 10px;
`;
