import React from 'react';
import { URL } from '../URL';
import axios from 'axios';

const LoginApi = async (
  email,
  password,
  setAuth,
  setAccountname,
  FollowingData,
  setIsCorrect,
  setLoginErrMessage,
) => {
  try {
    const res = await axios.post(
      `${URL}/user/login`,
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
      const { token, accountname } = res.data.user;
      console.log(res.data.user.email);
      setAuth(token);
      setAccountname(accountname);
      await FollowingData(token);
    } else if (res.data.status === 422) {
      setIsCorrect(false);
      setLoginErrMessage('*이메일 또는 비밀번호가 일치하지 않습니다.');
    }
  } catch (error) {
    // 요청이 실패한 경우
    console.error(error);
  }
};

export default LoginApi;
