import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { LBtn, LdisabledBtn } from '../../components/common/button/Button';
import Input from '../../components/common/Input/Input';

export const Wrapper = styled.div`
  height: 100vh;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  h1 {
    text-align: center;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  text-align: center;
  color: var(--basic-grey);
`;

export const LinkWrapper = styled.div`
  margin-top: 20px;
  text-align: center;
  color: var(--basic-grey);
`;

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [loginErrMessage, setLoginErrMessage] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const navigate = useNavigate();

  function emailCheck(event) {
    setEmail(event.target.value);
    const testEmail =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(
        email,
      );

    if (testEmail) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  }

  function passwordCheck(event) {
    setPassword(event.target.value);
    const testPassword = /^[A-Za-z0-9]{5,20}$/;
    if (password !== '' && password.match(testPassword)) {
      setIsPasswordValid(true);
    } else {
      setIsPasswordValid(false);
    }
  }

  async function onhandlesubmit(event) {
    event.preventDefault();
    const url = 'https://api.mandarin.weniv.co.kr';
    try {
      const res = await axios.post(
        `${url}/user/login`,
        {
          user: {
            email,
            password,
          },
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      // const successRes = res.data;
      console.log(res.data);
      if (res.data.user) {
        const userData = res.data.user;
        const { token, accountname, image, _id } = userData;
        localStorage.setItem('token', token);
        localStorage.setItem('accountname', accountname);
        localStorage.setItem('image', image);
        localStorage.setItem('id', _id);
        navigate('/home');
      }

      if (res.data.status === 422) {
        setIsCorrect(false);
        setLoginErrMessage('*이메일 또는 비밀번호가 일치하지 않습니다.');
      } else {
        setIsCorrect(true);
      }
    } catch (error) {
      // 요청이 실패한 경우
      console.error(error);
    }
  }

  return (
    <Wrapper>
      <h1>로그인</h1>
      <form onSubmit={onhandlesubmit}>
        <FormWrapper>
          <Input
            label="이메일"
            type="email"
            id="user-email"
            name="user-email"
            placeholder=""
            value={email}
            onChange={event => emailCheck(event)}
          />
          <Input
            label="비밀번호"
            type="password"
            id="user-password"
            name="user-password"
            placehoder=""
            value={password}
            onChange={event => passwordCheck(event)}
            isCorrect={isCorrect}
            errorMessage={loginErrMessage}
          />

          {isEmailValid && isPasswordValid ? (
            <LBtn type="submit" content="로그인" />
          ) : (
            <LdisabledBtn content="로그인" />
          )}
        </FormWrapper>
      </form>
      <LinkWrapper>
        <Link to="/join">이메일로 회원가입</Link>
      </LinkWrapper>
    </Wrapper>
  );
}

export default LoginPage;
