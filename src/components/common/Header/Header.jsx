import React from 'react';
import styled from 'styled-components';
import searchIcon from '../../../assets/icons/icon-search.png';
import {
  ArrowLeft,
  MSBtn,
  ProfileEditMSBtn,
  MoreIconButton,
} from '../button/Button';
import SearchInput from '../Input/SearchInput';

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
  return (
    <HeaderMainNavStyle>
      <h1>니고네고 피드</h1>
      <button type="button">
        <img src={searchIcon} alt="" />
      </button>
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
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderBasicNavStyle = styled(HeaderDefaultStyle)``;

const HeaderSearchNavStyle = styled(HeaderDefaultStyle)``;

const HeaderMainNavStyle = styled(HeaderDefaultStyle)`
  h1 {
    font-size: 1.8rem;
  }
  button {
    border: none;
  }
`;

const HeaderUploadNavStyle = styled(HeaderDefaultStyle)``;

const HeaderChatNavStyle = styled(HeaderDefaultStyle)`
  h1 {
    flex-grow: 2;
    padding-left: 10px;
  }
`;
