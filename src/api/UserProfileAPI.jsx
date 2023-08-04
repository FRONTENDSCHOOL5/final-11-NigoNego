import axios from 'axios';
import { URL } from './URL';
import { authAtom } from '../atom/atoms';
import { useRecoilValue } from 'recoil';
import { token } from './getData/getData';

const UserProfileAPI = () => {
  const token = useRecoilValue(authAtom);
  console.log(token);

  const getUserProfile = async () => {
    console.log(1231);
    try {
      const response = await axios.get(URL + '/user/myinfo', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
    } catch (error) {
      console.log('에러');
    }
  };

  return { getUserProfile };
};

export default UserProfileAPI;
