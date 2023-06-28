import React from 'react';
import styled from 'styled-components';
import { HeaderMainNav } from '../../components/common/Header/Header';
import Navbar from '../../components/common/Navbar/Navbar';
import { MBtn } from '../../components/common/button/Button';
import { ReactComponent as LogoColorImg } from '../../assets/image/LogoColorImg.svg';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  return (
    <Wrapper>
      <HeaderMainNav content={'니고네고 피드'} />
      <HomeBlank />
      <Navbar homeV={false} chatV={true} postV={true} profileV={true} />
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
      <LogoColorImg width="160px" height="160px" />
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
  gap: 10px;
  margin-top: 4.8rem;
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
