import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { LBtn, LdisabledBtn } from '../../components/common/button/Button';
import Input from '../../components/common/Input/Input';
import { Wrapper, FormWrapper } from '../LoginPage/LoginPage';

function JoinPage() {
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
    const testPassword = /^[A-Za-z0-9]{6,20}$/;
    if (password !== '' && password.match(testPassword)) {
      setIsPasswordValid(true);
    } else {
      setIsPasswordValid(false);
    }
  }

  function onhandlesubmit(event) {
    event.preventDefault();
    // 2. 회원이 맞으면 다음 컴포넌트로 넘어가도록
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
      {/* <LinkWrapper>
        <Link to="/join">이메일로 회원가입</Link>
      </LinkWrapper> */}
    </Wrapper>
  );
}

export default JoinPage;
