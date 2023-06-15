import React from 'react';
import styled from 'styled-components';
import arrowLeft from '../../../assets/icons/icon-arrow-left.png';
import moreIcon from '../../../assets/icons/icon-more-vertical.png';

export function LBtn({ content }) {
  return <LBtnStyle>{content}</LBtnStyle>;
}

export function LdisabledBtn({ content }) {
  return <LdisabledBtnStyle>{content}</LdisabledBtnStyle>;
}

export function MBtn() {
  return <MBtnStyle>팔로우</MBtnStyle>;
}

export function MdisabledBtn() {
  return <MdisabledBtnStyle>팔로우</MdisabledBtnStyle>;
}

export function MActivBtn() {
  return <MActivBtnStyle>언팔로우</MActivBtnStyle>;
}

export function MSBtn() {
  return <MSBtnStyle>저장</MSBtnStyle>;
}
export function MSdisabledBtn() {
  return <MSdisabledBtnStyle>저장</MSdisabledBtnStyle>;
}

export function SBtn() {
  return <SactivStyle>팔로우</SactivStyle>;
}

export function SactivBtn() {
  return <SactivStyle>취소</SactivStyle>;
}

export function ArrowLeft() {
  return (
    <ArrowLeftStyle>
      <img src={arrowLeft} alt="" />
    </ArrowLeftStyle>
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
  width: 80%;
  padding: 8px;
`;
const LdisabledBtnStyle = styled(BtnCommonStlyeDisabled)`
  width: 100%;
  padding: 8px;
`;

const MBtnStyle = styled(BtnCommonStlye)`
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
  padding: 8px;
`;
const MSdisabledBtnStyle = styled(BtnCommonStlyeDisabled)`
  width: 90px;
  padding: 8px;
`;
const SactivStyle = styled(BtnCommonStlye)`
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
`;

export function MoreIconButton() {
  return (
    <MoreIconButtonStyle>
      <img src={moreIcon} alt="" />
    </MoreIconButtonStyle>
  );
}

const MoreIconButtonStyle = styled.button`
  border: none;
  color: red;
`;
