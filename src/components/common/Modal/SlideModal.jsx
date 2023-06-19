import React from 'react';
import styled from 'styled-components';
import slideIcon from '../../../assets/icons/slide-top-icon.png';

export default function SlideModal() {
  return (
    <SlideModalWrapp>
      <img src={slideIcon} alt="" />
      <ul>
        <li>설정 및 개인정보</li>
        <li>로그아웃</li>
      </ul>
    </SlideModalWrapp>
  );
}

const SlideModalWrapp = styled.div`
  box-shadow: inset 0px 0px 3px 1px rgb(0, 38, 255);
  text-align: center;
  padding: 10px 0;
  border-radius: 10px 10px 0 0;

  img {
  }

  ul {
    text-align: initial;
    li {
      padding: 20px;
    }
  }
`;
