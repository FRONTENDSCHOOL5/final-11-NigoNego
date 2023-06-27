// import React from 'react';
import styled from 'styled-components';

import logoImage from '../../assets/images/logoImage.png';
import kakaoIcon from '../../assets/icons/kakao.png';
import googleIcon from '../../assets/icons/google.png';
import facebookIcon from '../../assets/icons/facebook.png';

const Wrapper = styled.div`
  height: 100vh;
  color: #767676;
`;

const Logo = styled.section`
  width: 100%;
  height: 60%;
  background: url(${logoImage}) no-repeat bottom/contain #ffde00;
`;

const LoginSelect = styled.section`
  display: flex;
  gap: 1.8rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 40%;

  ul {
    display: flex;
    & li:nth-child(1) a {
      &:after {
        margin: 0 0.9rem;
        content: '|';
      }
    }
  }

  a {
    font-size: 12px;
  }
`;

// 소셜 로그인 버튼 기본 스타일
const BtnLogin = styled.button`
  font-size: 1.4rem;
  color: #767676;
  padding: 1.6rem;
  border-radius: 2.5rem;
  border: 0.1rem solid;
  background-color: #fff;
  width: 80%;
  position: relative;
  &:before {
    content: '';
    width: 24px;
    height: 24px;
    position: absolute;
    left: 20px;
    top: 12.5px;
  }
`;

const KakaoBtnLogin = styled(BtnLogin)`
  border-color: #f2c94c;
  &:before {
    background-image: url(${kakaoIcon});
  }
`;

const GoogleBtnLogin = styled(BtnLogin)`
  border-color: #767676;
  &:before {
    background-image: url(${googleIcon});
  }
`;

const FacebookBtnLogin = styled(BtnLogin)`
  border-color: #2d9cdb;
  &:before {
    background-image: url(${facebookIcon});
  }
`;

export {
  Wrapper,
  Logo,
  LoginSelect,
  KakaoBtnLogin,
  FacebookBtnLogin,
  GoogleBtnLogin,
};
