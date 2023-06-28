import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import SlideModal from '../Modal/SlideModal';
import { ReactComponent as IconArrowLeft } from '../../../assets/image/IconArrowLeft.svg';
import { ReactComponent as IconMoreView } from '../../../assets/image/IconMoreView.svg';

export function LBtn({ content }) {
  return <LBtnStyle>{content}</LBtnStyle>;
}

export function LdisabledBtn({ h, content }) {
  return (
    <LdisabledBtnStyle disabled height={h}>
      {content}
    </LdisabledBtnStyle>
  );
}

export function MBtn({ h, content, onClick }) {
  return (
    <MBtnStyle height={h} onClick={onClick}>
      {content}
    </MBtnStyle>
  );
}

export function MdisabledBtn() {
  return <MdisabledBtnStyle>팔로우</MdisabledBtnStyle>;
}

export function MActivBtn({ onClick }) {
  return <MActivBtnStyle onClick={onClick}>언팔로우</MActivBtnStyle>;
}

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

const LBtnStyle = styled(BtnCommonStlye)`
  width: 100%;
  padding: 8px;
`;
const LdisabledBtnStyle = styled(BtnCommonStlyeDisabled)`
  height: ${props => props.height}px;
  width: 100%;
  padding: 8px;
`;

const MBtnStyle = styled(BtnCommonStlye)`
  height: ${props => props.height}px;
  width: 120px;
  padding: 5px;
`;

const MdisabledBtnStyle = styled(BtnCommonStlyeDisabled)`
  width: 120px;
  padding: 8px;
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
