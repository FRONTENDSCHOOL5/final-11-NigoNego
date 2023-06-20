import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { LBtn, LdisabledBtn } from '../../components/common/button/Button';
import Input from '../../components/common/Input/Input';
import { Wrapper, FormWrapper } from '../LoginPage/LoginPage';

function JoinPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  function emailCheck(event) {
    const emailValue = event.target.value;
    setEmail(emailValue);

    const testEmail =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(
        emailValue,
      );

    if (testEmail) {
      axios
        .post('https://api.mandarin.weniv.co.kr/user/emailvalid', {
          user: {
            email: emailValue,
          },
        })
        .then(response => {
          if (response.data.isDuplicate) {
            // 이메일 중복 처리
            setIsEmailValid(false);
            console.log('이메일 중복');
          } else {
            setIsEmailValid(true);
            console.log('이메일 중복 아님');
            console.log(response.data);
          }
        })
        .catch(error => {
          console.error('이메일 중복 체크 오류:', error);
        });
    }
  }

  function passwordCheck(event) {
    setPassword(event.target.value);
    const testPassword = /^[A-Za-z0-9]{6,20}$/;
    if (event.target.value !== '' && event.target.value.match(testPassword)) {
      setIsPasswordValid(true);
    } else {
      setIsPasswordValid(false);
    }
  }

  function onhandlesubmit(event) {
    event.preventDefault();
    // 이메일 중복 체크
    emailCheck(event);

    if (isEmailValid && isPasswordValid) {
      navigate('/joinmember');
      console.log(email, password);
    } else {
      console.log('입력값이 유효하지 않습니다.');
    }
  }

  return (
    <Wrapper>
      <h1>회원가입 페이지</h1>
      <form onSubmit={onhandlesubmit}>
        <FormWrapper>
          <Input
            label="이메일"
            type="email"
            id="user-email"
            name="user-email"
            placeholder="이메일 주소를 입력해 주세요."
            value={email}
            onChange={event => emailCheck(event)}
          />
          <Input
            label="비밀번호"
            type="password"
            id="user-password"
            name="user-password"
            placeholder="비밀번호를 성절해 주세요."
            value={password}
            onChange={event => passwordCheck(event)}
          />

          {isEmailValid && isPasswordValid ? (
            <LBtn type="submit" content="다음" />
          ) : (
            <LdisabledBtn content="다음" />
          )}
        </FormWrapper>
      </form>
    </Wrapper>
  );
}

export default JoinPage;
