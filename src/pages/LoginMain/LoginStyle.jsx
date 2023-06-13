import React from 'react';
import styled from 'styled-components';

import logoImage from '../../assets/images/logoImage.png'
import kakaoIcon from '../../assets/icons/kakao.png'
import googleIcon from '../../assets/icons/google.png'
import facebookIcon from '../../assets/icons/facebook.png'



const Wrapper = styled.div`
  height: 100vh;
`

const Logo = styled.section`
  box-shadow: inset 0 0 10px blue;
  width: 100%;
  height: 60%;
  background: url(${logoImage}) bottom no-repeat #FFDE00;;
`

const LoginSelect = styled.section`
  box-shadow:inset 0 0 10px red;
  display:flex;
  gap:1.8rem;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  height: 40%;
`

// 소셜 로그인 버튼 기본 스타일
const BtnLogin = styled.button`
  font-size:1.4rem;
  color: #767676;
  padding:1.6rem;
  border-radius: 2.5rem;
  border: 0.1rem solid;
  background-color: #fff;
  width: 80%;
  position: relative;
  &:before {
    content:"";
    width: 24px;
    height: 24px;
    position: absolute;
    left: 20px;
    top:12.5px;
    
  }
`

const KakaoBtnLogin = styled(BtnLogin)`
  border-color:#F2C94C;
  &:before {
    background-image: url(${kakaoIcon});
  }
`

const GoogleBtnLogin = styled(BtnLogin)`
  border-color:#767676;
  &:before {
    background-image: url(${googleIcon});
  }
`

const FacebookBtnLogin = styled(BtnLogin)`
  border-color:#2D9CDB;
  &:before {
    background-image: url(${facebookIcon});
  }
`



export { Wrapper, Logo, LoginSelect, KakaoBtnLogin, FacebookBtnLogin, GoogleBtnLogin };