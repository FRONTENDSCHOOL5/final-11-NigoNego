import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import SlideModal from '../Modal/SlideModal';
import { ReactComponent as IconArrowLeft } from '../../../assets/image/IconArrowLeft.svg';
import { ReactComponent as IconMoreView } from '../../../assets/image/IconMoreView.svg';

// 가장 긴 버튼
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

// 가장 긴 버튼 스타일
const ButtonLongStyle = styled.button`
  padding: 10px;
  border-radius: 10px;
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
  padding: 10px;
  border-radius: 10px;
  background-color: ${props => props.backgroundColor || 'var(--basic-yellow)'};
  border: ${props => props.border || 'none'};
  width: 100px;
`;

// 짧은 버튼
export const ButtonShort = props => {
  return <ButtonShortStyle></ButtonShortStyle>;
};

// 짧은 버튼 스타일
const ButtonShortStyle = styled.button`
  padding: 10px;
  width: 50px;
`;

export function MSBtn({ content, disabled }) {
  return <MSBtnStyle disabled={disabled}>{content}</MSBtnStyle>;
}

export function ProfileEditMSBtn({ content, onClick, disabled }) {
  return (
    <MSBtnStyle
      onClick={onClick}
      disabled={disabled}
      className={disabled ? 'disabled' : ''}
    >
      {content}
    </MSBtnStyle>
  );
}

export function MSdisabledBtn() {
  return <MSdisabledBtnStyle>저장</MSdisabledBtnStyle>;
}

export function SBtn() {
  return <SactivStyle>팔로우</SactivStyle>;
}

export function SactivBtn() {
  return <SdisabledStyle>취소</SdisabledStyle>;
}

export function ArrowLeft() {
  const navigate = useNavigate();

  const handleback = () => {
    navigate(-1);
  };
  return (
    <ArrowLeftStyle onClick={handleback}>
      <IconArrowLeft width="24px" height="24px" />
    </ArrowLeftStyle>
  );
}

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

const BtnCommonStlye = styled.button`
  border-radius: 44px;
  border-style: none;
  background-color: var(--basic-yellow);
  color: #000;
  display: block;
`;

const BtnCommonStlyeDisabled = styled(BtnCommonStlye)`
  background-color: var(--light-yellow);
`;

const MActivBtnStyle = styled(BtnCommonStlye)`
  color: var(--basic-grey);
  background-color: white;
  border: 1px solid #767676;
  width: 120px;
  padding: 5px;
`;
const MSBtnStyle = styled(BtnCommonStlye)`
  width: 90px;
  height: 32px;
  padding: 7px;
  background-color: ${({ disabled }) =>
    disabled ? ' var(--light-yellow)' : ' var(--basic-yellow)'};
  color: ${({ disabled }) => (disabled ? '' : 'black')};

  &:hover {
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  }

  &.disabled {
    pointer-events: none;
    opacity: 0.5;
  }
`;
const MSdisabledBtnStyle = styled(BtnCommonStlyeDisabled)`
  width: 90px;
  height: 32px;
  padding: 7px;
`;
const SactivStyle = styled(BtnCommonStlye)`
  /* background-color: var(--basic-yellow); */
  width: 56px;
  height: 28px;
  padding: 5px;
`;
const SdisabledStyle = styled(BtnCommonStlyeDisabled)`
  color: var(--basic-grey);
  background-color: white;
  border: 1px solid #767676;
  width: 56px;
  padding: 5px;
`;

const ArrowLeftStyle = styled.div`
  & {
    img {
      vertical-align: middle;
    }
  }
  :hover {
    cursor: pointer;
  }
`;

export const MoreIconButtonStyle = styled.button`
  border: none;
  color: red;
`;
