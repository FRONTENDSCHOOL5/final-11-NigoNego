import React from 'react'
import {Wrapper,Logo,LoginSelect, KakaoBtnLogin, GoogleBtnLogin, FacebookBtnLogin} from '../LoginPage/loginStyle.jsx'

function LoginPage() {
  return (
    <Wrapper>
      <Logo></Logo>
      <LoginSelect>
        <KakaoBtnLogin>카카오톡 계정으로 로그인</KakaoBtnLogin>
        <GoogleBtnLogin>구글 계정으로 로그인</GoogleBtnLogin>
        <FacebookBtnLogin>페이스북 계정으로 로그인</FacebookBtnLogin>
        <ul>
          <li>이메일로 로그인</li>
          <li>회원가입</li>
        </ul>
      </LoginSelect>
    </Wrapper>
  )
}

export default LoginPage;