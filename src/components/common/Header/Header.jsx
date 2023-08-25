
import React from 'react';
import styled from 'styled-components';
import { ReactComponent as IconSearch } from '../../../assets/image/IconSearch.svg';
import { ReactComponent as IconArrow } from '../../../assets/image/IconArrowLeft.svg';

import { ButtonShort, MoreIconButton } from '../button/Button';
import SearchInput from '../Input/SearchInput';
import { useNavigate } from 'react-router-dom';

export function HeaderBasic({content}) {
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

export function HeaderSearch() {
    //뒤로가기 구현
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    };

    return (
        <HeaderDefaultStyle>
            <button onClick={handleBack} type="button">
                <IconArrow width="24px" height="24px" />
            </button>
            <SearchInput />
        </HeaderDefaultStyle>
    );
}

export function HeaderArrow({content, children, disabled}) {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    };

    const pathName = window.location.pathname;
    const isPostUpLoad = pathName == '/postupload';

    return (
        <HeaderDefaultStyle>
            <div class="have-text">
                <button onClick={handleBack} type="button">
                    <IconArrow width="24px" height="24px" />
                </button>
                <h1>{content}</h1>
            </div>

            {!isPostUpLoad ? (<MoreIconButton />) : (<ButtonShort disabled={disabled}>{children}</ButtonShort>)}
        </HeaderDefaultStyle>
    )
}

const HeaderDefaultStyle = styled.div`
  button {
    border: none;
  }
  border: 1px solid #ccc;
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
  
  .have-text {
    display: flex;
  }
`;
