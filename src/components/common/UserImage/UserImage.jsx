import React from 'react';
import styled from 'styled-components';
import basicImg from '../../../assets/images/basic-profile-img.png';

/**
이미지컴포넌트에서 나중에 프로필에서 이미지 설정할때 사용될거같아서
이미지에 prop로 이미지 링크 전달해주게 짜려고 했지만 실패 했어요..
하지만 베이직 이미지는 정상적으로나와서 이렇게 짠상태로 두겠습니다.!
 */

const ImageStyle = styled.div`
  border-radius: 50%;
  background-image: url(${props => props.backgroundUrl});
  background-size: cover;
`;

const LProfile = styled(ImageStyle)`
  width: 110px;
  height: 110px;
`;

export function LImage({ backgroundUrl }) {
  return <LProfile backgroundUrl={backgroundUrl || basicImg} />;
}

const MProfile = styled(ImageStyle)`
  width: 50px;
  height: 50px;
`;

export function MImage({ backgroundUrl }) {
  return <MProfile backgroundUrl={backgroundUrl || basicImg} />;
}

const SProfile = styled(ImageStyle)`
  width: 42px;
  height: 42px;
`;

export function SImage({ backgroundUrl }) {
  return <SProfile backgroundUrl={backgroundUrl || basicImg} />;
}

const XSProfile = styled(ImageStyle)`
  width: 36px;
  height: 36px;
`;

export function XSImage({ backgroundUrl }) {
  return <XSProfile backgroundUrl={backgroundUrl ? backgroundUrl : basicImg} />;
}
