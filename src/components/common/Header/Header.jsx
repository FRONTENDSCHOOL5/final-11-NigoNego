import React from 'react';
import styled from 'styled-components';
import { ReactComponent as IconSearch } from '../../../assets/image/IconSearch.svg';
// import searchIcon from '../../../assets/icons/icon-search.svg';

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
    <HeaderDefaultStyle>
      <ArrowLeft />
      <MoreIconButton />
    </HeaderDefaultStyle>
  );
}

export function HeaderSearchNav() {
  return (
    <HeaderDefaultStyle>
      <ArrowLeft />
      <div className="inputComponent">
        <SearchInput />
      </div>
    </HeaderDefaultStyle>
  );
}

export function HeaderMainNav({ content }) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/search'); // 넘어가고자 하는 페이지의 경로를 설정해주세요
  };

  return (
    <HeaderDefaultStyle>
      <h1>{content}</h1>

      <button onClick={handleButtonClick} type="button">
        <IconSearch width="24px" height="24px" />
      </button>
    </HeaderDefaultStyle>
  );
}

export function HeaderUploadNav({ content, isFormValid }) {
  return (
    <HeaderDefaultStyle>
      <ArrowLeft />
      <MSBtn content={content} disabled={!isFormValid} />
    </HeaderDefaultStyle>
  );
}

export function HeaderEditdNav({ content, isFormValid, handleSave }) {
  return (
    <HeaderDefaultStyle>
      <ArrowLeft />
      <ProfileEditMSBtn
        content={content}
        onClick={handleSave}
        disabled={!isFormValid}
      />
    </HeaderDefaultStyle>
  );
}

export function HeaderChatNav({ content }) {
  return (
    <HeaderDefaultStyle>
      <div className="havetitle">
        <ArrowLeft />
        <h2>{content}</h2>
      </div>
      <MoreIconButton />
    </HeaderDefaultStyle>
  );
}

export function HeaderContentdNav({ content }) {
  return (
    <HeaderDefaultStyle>
      <ArrowLeft />
      <h2>{content}</h2>
    </HeaderDefaultStyle>
  );
}

// 상단바 기본 style
const HeaderDefaultStyle = styled.div`
  /* box-shadow: inset 0px 0px 3px 1px rgb(0, 38, 255); */
  button {
    border: none;
  }
  height: 4.8rem;
  border-bottom: 1px solid var(--basic-border-color);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: static;
  top: 0;
  z-index: 100;
  padding: 0 10px;
  background-color: #fff;
  .inputComponent {
    width: 100%;
    margin-left: 12px;
  }
  .havetitle {
    display: flex;
    align-items: center;
    h2 {
      margin-left: 12px;
    }
  }
`;
