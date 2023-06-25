import React from 'react';
import styled from 'styled-components';
import { HeaderMainNav } from '../../components/common/Header/Header';
import Navbar from '../../components/common/Navbar/Navbar';
import { MBtn } from '../../components/common/button/Button';
import { ReactComponent as LogoColorImg } from '../../assets/image/LogoColorImg.svg';

function HomePage() {
  return (
    <Wrapper>
      <HeaderMainNav />
      {/* 조건식 추가 */}
      <HomeBlank />
      <Navbar />
    </Wrapper>
  );
}
// localstorage.getItem으로 가져오기 token
function HomeBlank() {
  return (
    <ContentWrapper>
      <LogoColorImg width="160px" height="160px" />
      <p>유저를 검색해 팔로우 해보세요.</p>
      <MBtn content="검색" />
    </ContentWrapper>
  );
}

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  img {
    height: 100px;
    width: 100px;
  }
`;

export default HomePage;
