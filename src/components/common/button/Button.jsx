import React, { useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import SlideModal from '../Modal/SlideModal';
import { ReactComponent as IconArrowLeft } from '../../../assets/image/IconArrowLeft.svg';
import { ReactComponent as IconMoreView } from '../../../assets/image/IconMoreView.svg';

//버튼 공통 컴포넌트
const ButtonCommonStyle = css`
  padding: 10px;
  border-radius: 10px;
`;

// 긴 버튼
export const ButtonLong = props => {
  const { type, disabled, backgroundColor, onClick } = props;
  console.log(props);

  return (
    <ButtonLongStyle
      type={type ? type : 'button'}
      disabled={disabled}
      backgroundColor={backgroundColor}
      onClick={onClick}
    >
      {props.children}
    </ButtonLongStyle>
  );
};

// 긴 버튼 스타일
const ButtonLongStyle = styled.button`
  ${ButtonCommonStyle}
  background-color: ${props => props.backgroundColor || 'var(--basic-yellow)'};
  border: none;
`;

// 중간 버튼
export const ButtonMiddle = props => {
  const { type, disabled, backgroundColor, onClick, border } = props;

  return (
    <ButtonMiddleStyle
      type={type ? type : 'button'}
      onClick={onClick}
      backgroundColor={backgroundColor}
      border={border}
    >
      {props.children}
    </ButtonMiddleStyle>
  );
};

// 중간 버튼 스타일
const ButtonMiddleStyle = styled.button`
  ${ButtonCommonStyle}
  background-color: ${props => props.backgroundColor || 'var(--basic-yellow)'};
  border: ${props => props.border || 'none'};
  width: 100px;
`;

// 짧은 버튼
export const ButtonShort = props => {
  return <ButtonShortStyle>{props.children}</ButtonShortStyle>;
};

// 짧은 버튼 스타일
const ButtonShortStyle = styled.button`
  ${ButtonCommonStyle}
  width: 50px;
  background-color: var(--basic-yellow);
`;

export function MoreIconButton() {
  const [isSideSlideOpen, setIsSideSlideOpen] = useState(false);

  const handleIconClick = () => {
    setIsSideSlideOpen(true);
  };

  const handleModalClose = event => {
    if (event.target === event.currentTarget) {
      setIsSideSlideOpen(false);
    }
  };

  return (
    <>
      <MoreIconButtonStyle onClick={handleIconClick}>
        <IconMoreView width="24px" height="24px" />
      </MoreIconButtonStyle>
      {isSideSlideOpen && (
        <SlideModal closeModal={handleModalClose}></SlideModal>
      )}
    </>
  );
}

const BtnCommonStyle = styled.button`
  border-radius: 44px;
  border-style: none;
  background-color: var(--basic-yellow);
  color: #000;
  display: block;
`;

const MActivBtnStyle = styled(BtnCommonStyle)`
  color: var(--basic-grey);
  background-color: white;
  border: 1px solid #767676;
  width: 120px;
  padding: 5px;
`;

export const MoreIconButtonStyle = styled.button`
  border: none;
  color: red;
`;
