import React from 'react';
import styled from 'styled-components';

export default function BodyGlobal({ children, margin }) {
  return <BodyGlobalOuter margin={margin}>{children} </BodyGlobalOuter>;
}

const BodyGlobalOuter = styled.div`
  /* 가이드라인, 필요시 on,off */
  /* box-shadow: inset 0px 0px 3px 1px rgb(0, 38, 255); */
  /* margin: 4.8rem; */
  height: 86vh;
  overflow: scroll;
  margin: ${props => props.margin || '0'} 10px 0px 10px;
`;
