import React from 'react';
import styled from 'styled-components';

export default function MainWrapperF({ children }) {
  return <MainWrapper className="main-wrapper">{children} </MainWrapper>;
}

const MainWrapper = styled.div`
  /* 가이드라인, 필요시 on,off */
  /* box-shadow: inset 0px 0px 3px 1px rgb(0, 38, 255); */
  margin: 4.8rem;
`;
