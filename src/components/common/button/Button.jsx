import React from 'react';
import styled from 'styled-components';

export function LBtn() {
  return <LBtnStyle>다음</LBtnStyle>;
}

export function LdisabledBtn() {
  return <LdisabledBtnStyle>다음</LdisabledBtnStyle>;
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

const BtnCommonStlye = styled.button`
  border-radius: 44px;
  border-style: none;
  background-color: var(--basic-yellow);
  color: #000;

  display: block;
  margin: 0 auto;
`;

const BtnCommonStlyeDisabled = styled(BtnCommonStlye)`
  background-color: var(--light-yellow);
`;

const LBtnStyle = styled(BtnCommonStlye)`
  width: 80%;
  padding: 8px;
`;
const LdisabledBtnStyle = styled(BtnCommonStlyeDisabled)`
  width: 80%;
  padding: 8px;
`;

const MBtnStyle = styled(BtnCommonStlye)`
  width: 120px;
  padding: 5px;
`;

const MdisabledBtnStyle = styled(BtnCommonStlyeDisabled)`
  width: 120px;
  padding: 5px;
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
  padding: 5px;
`;
const MSdisabledBtnStyle = styled(BtnCommonStlyeDisabled)`
  width: 90px;
  padding: 5px;
`;
const SactivStyle = styled(BtnCommonStlye)`
  color: var(--basic-grey);
  background-color: white;
  border: 1px solid #767676;
  width: 56px;
  padding: 5px;
`;
