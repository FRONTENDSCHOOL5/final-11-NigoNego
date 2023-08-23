import React, { useState, useCallback } from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ButtonLong } from '../../components/common/button/Button';
import Input from '../../components/common/Input/Input';
import { Wrapper, FormWrapper } from '../LoginPage/LoginPage';
import MainWrapperF from '../../styles/MainGlobal';
import Layout from "../../styles/Layout";
import UseFetchToken from '../../Hooks/UseFetchToken';

const ButtonWrapper = styled.div`
  margin-top: 30px;
`;

function JoinPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isEmailValid, setIsEmailValid] = useState(null);
  const [isPasswordValid, setIsPasswordValid] = useState(null);
  const [errorMessageEM, setErrorMessageEM] = useState('');
  const [errorMessagePW, setErrorMessagePW] = useState('');
  const [isEmailPossible, setIsEmailPossible] = useState('');
  const navigate = useNavigate();
  const { postJoin } = UseFetchToken();

  function emailCheck(event) {
    const testEmail =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(
        event.target.value,
      );

    if (event.target.value === '') {
      setIsEmailValid(null);
    } else if (testEmail) {
      setIsEmailValid(true);
      setErrorMessageEM('');

      console.log('이메일 통과');
      // 여기에 원래 있는 이메일이 있는지 유효성 검사기능추가!!
    } else {
      // 원래 있는 이메일과 일치했을때 함수
      console.log('이메일 실패');
      setIsEmailValid(false);
      setErrorMessageEM('*이메일 형식이 유효하지 않습니다.');
    }
  }

  const handleEmailBlur = useCallback(event => {
    emailCheck(event);
  }, []);

  function passwordCheck(event) {
    const testPassword = /^[A-Za-z0-9]{6,20}$/;
    if (event.target.value === '') {
      setIsPasswordValid(null);
    } else if (
      event.target.value !== '' &&
      event.target.value.match(testPassword)
    ) {
      console.log('패스워드 통과');
      setIsPasswordValid(true);
    } else {
      setIsPasswordValid(false);
      setErrorMessagePW('*비밀번호는 6자 이상이어야 합니다.');
      console.log('패스워드 실패');
    }
  }

  const handlePasswordBlur = useCallback(event => {
    passwordCheck(event);
  }, []);

  async function onhandlesubmit() {
    // if (!isEmailValid || !isPasswordValid) return;

    try {
      // const url = 'https://api.mandarin.weniv.co.kr';

      // const res = await axios.post(`${url}/user/emailvalid`, {
      //   user: {
      //     email,
      //   },
      // });

      const res = await postJoin({ user: { email } });
      console.log('res', res.data);
      if (res.data.message === '이미 가입된 이메일 주소 입니다.') {
        setIsEmailPossible(false);
        setErrorMessageEM('*이미 가입된 이메일 주소입니다.');
        console.log('이미 가입된 이메일입니다.');
      } else {
        navigate('/joinmember', {
          state: {
            email,
            password,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleSubmit(e) {
    // handle submit
    e.preventDefault();
    onhandlesubmit();
  }

  return (
      <Layout>
    <MainWrapperF>
        <h1>회원가입 페이지</h1>
        <form onSubmit={handleSubmit}>
          <FormWrapper>
            <Input
              label="이메일"
              type="email"
              id="user-email"
              name="user-email"
              placeholder="이메일 주소를 입력해 주세요."
              value={email}
              onChange={event => setEmail(event.target.value)}
              onBlur={handleEmailBlur}
              // validation={isEmailValid}
              isCorrect={isEmailPossible}
              errorMessage={errorMessageEM}
            />
            <Input
              label="비밀번호"
              type="password"
              id="user-password"
              name="user-password"
              placeholder="비밀번호를 설정해 주세요."
              value={password}
              onChange={event => setPassword(event.target.value)}
              onBlur={handlePasswordBlur}
              isCorrect={isPasswordValid}
              errorMessage={errorMessagePW}
            />
            <ButtonWrapper>
              {/* {isEmailValid && isPasswordValid ? (
                <LBtn type="submit" content="다음" />
              ) : (
                <LdisabledBtn content="다음" h="32" />
              )} */}
              {isEmailValid && isPasswordValid ? (
                <ButtonLong type="submit">다음</ButtonLong>
              ) : (
                <ButtonLong disabled={true}>다음</ButtonLong>
              )}
            </ButtonWrapper>
          </FormWrapper>
        </form>
    </MainWrapperF>
      </Layout>
  );
}

export default JoinPage;
