import axios from 'axios';
import { URL } from './URL';
import { authAtom } from '../atom/atoms';
import { useRecoilValue } from 'recoil';
import { token } from './getData/getData';

const UserProfileAPI = () => {
  const token = useRecoilValue(authAtom);
  console.log(token);

  const userProfile = async () => {
    try {
      const response = await axios.get(URL + '/user/myinfo', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const res = await response;
      console.log(res);
    } catch (error) {
      console.log('에러');
    }
  };

  return userProfile;
};

export default UserProfileAPI;
