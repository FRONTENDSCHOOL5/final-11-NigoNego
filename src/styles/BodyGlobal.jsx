import React from 'react';
import styled from 'styled-components';

export default function BodyGlobal({ children }) {
  return <BodyGlobalWrapper>{children}</BodyGlobalWrapper>;
}

const BodyGlobalWrapper = styled.div`
  margin: 4.8rem 10px 0px 10px;
  /* 가이드라인, 필요시 on,off */
  /* box-shadow: inset 0px 0px 3px 1px rgb(0, 38, 255); */
  height: 90vh;
  overflow: scroll;
`;
