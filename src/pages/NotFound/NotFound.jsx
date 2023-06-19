import React from 'react';
import SVG from '../../assets/images/404 page.svg';
import { Wrapper, Image, NotFoundText, NotFoundBtn } from './NotFoundStyle';

export default function NotFound() {
  return (
    <Wrapper>
      <Image src={SVG} alt="404" />
      <NotFoundText>페이지를 찾을 수 없음</NotFoundText>
      <NotFoundBtn>이전페이지</NotFoundBtn>
    </Wrapper>
  );
}
