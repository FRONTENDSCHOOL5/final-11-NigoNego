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
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

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
    const testPassword = /^[A-Za-z0-9]{8,20}$/;
    if (password !== '' && password.match(testPassword)) {
      setIsPasswordValid(true);
    } else {
      setIsPasswordValid(false);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    axios
      .post(
        'https://api.mandarin.weniv.co.kr/user/login',
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
      )
      .then(response => {
        localStorage.setItem('Token', response.headers.authorization);
        console.log(response);
        if ((response.status = 200)) {
          return navigate('/home');
        }
      })
      .catch(err => {
        // setMessage(err.response.data.message);
        console.log(err);
      });
  }

  return (
    <Wrapper>
      <h1>로그인</h1>
      <form onSubmit={handleSubmit}>
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
            placeholder=""
            value={password}
            onChange={event => passwordCheck(event)}
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
