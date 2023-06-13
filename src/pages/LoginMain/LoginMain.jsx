import React from 'react'
import {Wrapper,Logo,LoginSelect, KakaoBtnLogin, GoogleBtnLogin, FacebookBtnLogin} from '../LoginMain/LoginStyle.jsx'
import {Link} from "react-router-dom"

function LoginPage() {
  return (
    <Wrapper>
      <Logo></Logo>
      <LoginSelect>
        <KakaoBtnLogin>카카오톡 계정으로 로그인</KakaoBtnLogin>
        <GoogleBtnLogin>구글 계정으로 로그인</GoogleBtnLogin>
        <FacebookBtnLogin>페이스북 계정으로 로그인</FacebookBtnLogin>
        <ul>
          <li><Link to ='/login'>이메일로 로그인</Link></li>
          <li><Link to ='/join'>회원가입</Link></li>
        </ul>
      </LoginSelect>
    </Wrapper>
  )
}

export default LoginPage;