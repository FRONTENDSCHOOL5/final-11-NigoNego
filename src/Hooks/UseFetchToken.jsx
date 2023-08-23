import React from 'react';
import axios from 'axios';
import authAtom from '../atom/authToken';
import URL from '../api/URL';
import { useRecoilValue } from 'recoil';
import createAxiosInstance from '../api/Api';

const UseFetchToken = () => {
  const UserToken = useRecoilValue(authAtom);

  const { getDataBase, postDataBase } = createAxiosInstance(UserToken);


  //회원가입 페이지 post 요청
  const postJoin = async data => {
    try {
      const response = await instance.post('/user/emailvalid', data);
      console.log(response);
      return response;
    } catch (error) {
      console.error('로그인 에러', error);
    }
  };


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

  const yourAccount = async () => {
    try {
      const response = await getDataBase.get(
        `/post/feed
        `,
      );
      return response;
    } catch (error) {
      console.error('error가 떴음', error);
    }
  };

  const getPostListLimit = async accountName => {
    try {
      const response = await getDataBase.get(`/post/${accountName}/userpost`);

      return response;
    } catch (error) {
      console.error('post오류');
    }
  };

  const getProfileData = async () => {
    try {
      const response = await getDataBase.get(`/user/myinfo`);
      console.log('작동');
      return response;
    } catch (error) {
      console.error('Profile오류');
    }
  };

  const getProductListLimit = async (skip, accountname) => {
    try {
      const response = await getDataBase.get(
        `/product/${accountname}/?limit=5&skip=${skip}`,
      );
      return response;
    } catch (err) {
      console.error('product오류');
    }
  };

  const getFollowData = async (accountname, follower) => {
    try {
      const response = await getDataBase.get(
        `/profile/${accountname}/${follower}`,
      );
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  const getUserFeed = async accountname => {
    try {
      const response = await getDataBase(`/profile/${accountname}`);
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  const postHeart = async id => {
    try {
      const response = await postDataBase.post(`/post/${id}/heart`);
      return response;
    } catch (error) {
      console.error('좋아요에러', error);
    }
  };

  const deleteHeart = async id => {
    try {
      const response = await postDataBase.delete(`/post/${id}/unheart`);
      return response;
    } catch (error) {
      console.error('좋아요에러', error);
    }
  };

  return {
    GetHomeFeedData,
    getPostListLimit,
    getProfileData,
    getProductListLimit,
    getFollowData,
    getUserFeed,
    yourAccount,
    postHeart,
    deleteHeart,
    postJoin,
  };
};

export default UseFetchToken;
