import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import SlideModal from '../Modal/SlideModal';
import { ReactComponent as IconMoreView } from '../../../assets/image/IconMoreView.svg';

//버튼 공통 스타일
const ButtonCommonStyle = css`
  padding: 10px;
  border-radius: 10px;
  background-color: ${props => props.backgroundColor || 'var(--basic-yellow)'};
  border: ${props => (props.border ? '1px solid gray' : 'none')};
`;

// 긴 버튼
export const ButtonLong = ({ type, ...props }) => {
  return (
    <ButtonLongStyle type={type ? type : 'button'} {...props}>
      {props.children}
    </ButtonLongStyle>
  );
};

// 긴 버튼 스타일
const ButtonLongStyle = styled.button`
  ${ButtonCommonStyle}
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
  width: 100px;
`;

// 짧은 버튼
export const ButtonShort = ({disabled, children}) => {
  return (
    <ButtonShortStyle disabled={disabled}>
      {children}
    </ButtonShortStyle>
  );
};

// 짧은 버튼 스타일
const ButtonShortStyle = styled.button`
  ${ButtonCommonStyle}
  width: 50px;
`;

// ====================

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
      <MoreIconButtonStyle onClick={handleIconClick} backgroundColor="none">
        <IconMoreView width="24px" height="24px" />
      </MoreIconButtonStyle>
      {isSideSlideOpen && (
        <SlideModal closeModal={handleModalClose}></SlideModal>
      )}
    </>
  );
}

export const MoreIconButtonStyle = styled.button`
  ${ButtonCommonStyle}
`;
