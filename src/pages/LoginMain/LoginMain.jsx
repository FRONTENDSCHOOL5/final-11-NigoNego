import React from 'react';
import { Link } from 'react-router-dom';
import {
  Wrapper,
  Logo,
  LoginSelect,
  KakaoBtnLogin,
  GoogleBtnLogin,
  FacebookBtnLogin,
} from './LoginStyle';

function LoginMain() {
  return (
    <Wrapper>
      <Logo />
      <LoginSelect>
        <KakaoBtnLogin>카카오톡 계정으로 로그인</KakaoBtnLogin>
        <GoogleBtnLogin>구글 계정으로 로그인</GoogleBtnLogin>
        <FacebookBtnLogin>페이스북 계정으로 로그인</FacebookBtnLogin>
        <ul>
          <li>
            <Link to="/login">이메일로 로그인</Link>
          </li>
          <li>
            <Link to="/join">회원가입</Link>
          </li>
        </ul>
      </LoginSelect>
    </Wrapper>
  );
}

export default LoginMain;
