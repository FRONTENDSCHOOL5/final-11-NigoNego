import React from 'react';
import axios from 'axios';
import authAtom from '../atom/authToken';
import URL from '../api/URL';
import { useRecoilValue } from 'recoil';
import createAxiosInstance from '../api/Api';

const UseFetchToken = () => {
  const UserToken = useRecoilValue(authAtom);
  const { getDataBase } = createAxiosInstance(UserToken);

  //팔로잉 게시글 목록
  const GetHomeFeedData = async (number, skip) => {
    try {
      const response = await getDataBase.get(
        `/post/feed/?limit=${number}&skip=${skip}`,
      );
      return response;
    } catch (error) {
      console.error('error가 떴음', error);
    }
  };

  return { GetHomeFeedData };
};

export default UseFetchToken;
