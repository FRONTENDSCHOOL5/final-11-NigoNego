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

export function SBtn() {
  return <SBtnStyle>저장</SBtnStyle>;
}

export function SactivBtn() {
  return <SactivStyle>저장</SactivStyle>;
}

const LBtnStyle = styled.button`
  width: 20.125rem;
  height: 2.75rem;
  color: red;
`;
const LdisabledBtnStyle = styled.button`
  color: red;
`;
const MBtnStyle = styled.button`
  color: red;
`;
const MdisabledBtnStyle = styled.button`
  color: red;
`;
const MActivBtnStyle = styled.button`
  color: red;
`;
const SBtnStyle = styled.button`
  color: red;
`;
const SactivStyle = styled.button`
  color: red;
`;
