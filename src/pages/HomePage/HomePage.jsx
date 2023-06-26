import React from 'react';
import styled from 'styled-components';
import { HeaderMainNav } from '../../components/common/Header/Header';
import Navbar from '../../components/common/Navbar/Navbar';
import basicLogo from '../../assets/images/logoImage.png';
import { MBtn } from '../../components/common/button/Button';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  return (
    <Wrapper>
      <HeaderMainNav />
      <HomeBlank />
      <Navbar />
    </Wrapper>
  );
}
// localstorage.getItem으로 가져오기 token
function HomeBlank() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/search'); // 넘어가고자 하는 페이지의 경로를 설정해주세요
  };
  return (
    <ContentWrapper>
      {/* 기능구현 고민된다.. */}
      <img src={basicLogo} alt="Logo" />
      <p>유저를 검색해 팔로우 해보세요.</p>
      <MBtn h="44" content="검색" onClick={handleButtonClick} />
    </ContentWrapper>
  );
}

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
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
