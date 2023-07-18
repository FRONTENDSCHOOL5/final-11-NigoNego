import React from 'react';
import axios from 'axios';
import { URL } from './URL.js';

const JoinMemberAPI = async userInfo => {
  const { username, email, password, accountname, intro, image } = {
    ...userInfo,
  };

  try {
    const response = await axios.post(`${URL}/user`, {
      user: {
        username,
        email,
        password,
        accountname,
        intro,
        image,
      },
    });
    console.log('회원가입성공:', response.data);
    console.log(username);
  } catch (error) {
    console.error('API 요청 실패:', error);
  }
};

export default JoinMemberAPI;
