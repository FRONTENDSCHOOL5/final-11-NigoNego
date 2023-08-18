import React from 'react';
import SVG from '../../assets/images/404 page.svg';
import { Wrapper, Image, NotFoundText, NotFoundBtn } from './NotFoundStyle';
import Layout from "../../styles/Layout";

export default function NotFound() {
  return (
    <Layout>
      <Image src={SVG} alt="404" />
      <NotFoundText>페이지를 찾을 수 없음</NotFoundText>
      <NotFoundBtn>이전페이지</NotFoundBtn>
    </Layout>
  );
}
