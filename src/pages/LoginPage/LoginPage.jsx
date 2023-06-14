import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LBtn } from '../../components/common/button/Button';

const LoginPageStyle = styled.div`
  height: 100vh;
  padding-top: 30px;
  box-shadow: inset 0 0 10px green;

  display: flex;
  flex-direction: column;
  align-items: center;
  .inputWrapper {
    margin: 40px auto 30px auto;
    & :nth-child(2) {
      margin-top: 16px;
      display: block;
    }
  }
  .linkWrapper {
    text-align: center;
    color: var(--basic-grey);
    font-size: 12px;
  }

  form {
    width: 80%;
    color: var(--basic-grey);
    font-size: 12px;
    margin-bottom: 30px;
    p {
      color: #eb5757;
      margin: 0;
    }
  }
`;

const Inputstyle = styled.input`
  display: block;
  width: 100%;
  padding: 12px 0;
  margin-top: 5px;
  border-style: none;
  border-bottom: 1px solid var(--basic-grey);
  &:focus {
    outline: 0;
    border-color: var(--basic-yellow);
  }
`;

const LabelStyle = styled.div`
  margin-top: 20px;
`;

function LoginPage() {
  return (
    <LoginPageStyle>
      <h1>로그인</h1>
      <form>
        <div className="inputWrapper">
          <label htmlFor="email">
            이메일
            <Inputstyle id="email" />
          </label>
          <p>*이메일 또는 비밀번호가 일치하지 않습니다.</p>
          <LabelStyle>
            <label htmlFor="password">
              비밀번호
              <Inputstyle id="password" />
            </label>
          </LabelStyle>
          <p>*이메일 또는 비밀번호가 일치하지 않습니다.</p>
        </div>
        <LBtn />
      </form>
      <div className="linkWrapper">
        <Link to="/join">이메일로 회원가입</Link>
      </div>
    </LoginPageStyle>
  );
}

export default LoginPage;
