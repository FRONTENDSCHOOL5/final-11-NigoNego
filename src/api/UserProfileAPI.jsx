import axios from 'axios';
import { URL } from './URL';
import authAtom from '../atom/authToken';
import { useRecoilValue } from 'recoil';

const UserProfileAPI = () => {
  const token = useRecoilValue(authAtom);
  const getDataBase = axios.create({
    baseURL: URL,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  const getPostListLimit = async accountName => {
    try {
      const response = await getDataBase.get(`/post/${accountName}/userpost`);

      return response;
    } catch (error) {
      console.error('post오류');
    }
  };

  // const getProfileData = async accountname => {
  //   try {
  //     const response = await getDataBase.get(`/profile/${accountname}`);
  //     console.log('작동');
  //     return response;
  //   } catch (error) {
  //     console.error('Profile오류');
  //   }
  // };

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

  return {
    getPostListLimit,
    getProfileData,
    getProductListLimit,
  };
};
export default UserProfileAPI;
