import React from 'react';
import axios from 'axios';

const LoginApi = async ({
  userInput,
  setAuth,
  setAccountname,
  FollowingData,
  setIsCorrect,
  setLoginErrMessage,
}) => {
  const url = 'https://api.mandarin.weniv.co.kr';
  try {
    const res = await axios.post(
      `${url}/user/login`,
      {
        user: {
          email: userInput.user.email,
          password: userInput.user.password,
        },
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    // const successRes = res.data;
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
