import React from 'react';
import styled from 'styled-components';
import searchIcon from '../../../assets/icons/icon-search.svg';
import {
  ArrowLeft,
  MSBtn,
  ProfileEditMSBtn,
  MoreIconButton,
} from '../button/Button';
import SearchInput from '../Input/SearchInput';
import { useNavigate } from 'react-router-dom';

export function HeaderBasicNav() {
  // 뒤로가기 버튼 구현하기;
  return (
    <HeaderBasicNavStyle>
      <ArrowLeft />
      <MoreIconButton />
    </HeaderBasicNavStyle>
  );
}

export function HeaderSearchNav() {
  return (
    <HeaderSearchNavStyle>
      <ArrowLeft />
      <SearchInput />
    </HeaderSearchNavStyle>
  );
}

export function HeaderMainNav() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/search'); // 넘어가고자 하는 페이지의 경로를 설정해주세요
  };

  return (
    <HeaderMainNavStyle>
      <h1>니고네고 피드</h1>

      <Button onClick={handleButtonClick}>
        <Img src={searchIcon} alt="검색 아이콘" />
      </Button>
    </HeaderMainNavStyle>
  );
}

export function HeaderUploadNav({ content }) {
  return (
    <HeaderUploadNavStyle>
      <ArrowLeft />
      <MSBtn content={content} />
    </HeaderUploadNavStyle>
  );
}

export function HeaderEditdNav({ content, isFormValid, handleSave }) {
  return (
    <HeaderUploadNavStyle>
      <ArrowLeft />
      <ProfileEditMSBtn
        content={content}
        onClick={handleSave}
        disabled={!isFormValid}
      />
    </HeaderUploadNavStyle>
  );
}

export function HeaderChatNav() {
  return (
    <HeaderChatNavStyle>
      <ArrowLeft onclick />
      <h1>애월읍 위니브 감귤농장</h1>
      <MoreIconButton />
    </HeaderChatNavStyle>
  );
}

// 상단바 기본 style
const HeaderDefaultStyle = styled.div`
  /* box-shadow: inset 0px 0px 3px 1px rgb(0, 38, 255); */
  height: 4.8rem;
  border-bottom: 1px solid var(--basic-border-color);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: static;
  top: 0;
  padding: 0 10px;
  background-color: #fff;
`;

const HeaderBasicNavStyle = styled(HeaderDefaultStyle)``;

const HeaderSearchNavStyle = styled(HeaderDefaultStyle)``;

const HeaderMainNavStyle = styled(HeaderDefaultStyle)`
  h1 {
    font-size: 1.8rem;
  }
`;

const Button = styled.button`
  border: none;
`;

const Img = styled.img`
  border: 1px solid black;
  padding: 30px;
`;

const HeaderUploadNavStyle = styled(HeaderDefaultStyle)``;

const HeaderChatNavStyle = styled(HeaderDefaultStyle)`
  h1 {
    flex-grow: 2;
    padding-left: 10px;
  }
`;
