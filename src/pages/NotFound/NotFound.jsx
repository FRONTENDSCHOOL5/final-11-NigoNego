import React from 'react';
import SVG from '../../assets/images/404 page.svg';
import Layout from "../../styles/Layout";
import styled from 'styled-components';

export default function NotFound() {
  return (
    <Layout align="center">
      <Image src={SVG} alt="404" />
      <NotFoundText>페이지를 찾을 수 없음</NotFoundText>
      <NotFoundBtn>이전페이지</NotFoundBtn>
    </Layout>
  );
}


const Image = styled.img`
  margin-top: 30vh;
`;

const NotFoundText = styled.p`
  font-size: 16px;
`;
const NotFoundBtn = styled.button`
  border: none;
  border-radius: 20px;
  background-color: var(--basic-yellow);
  padding: 10px 20px;
`;