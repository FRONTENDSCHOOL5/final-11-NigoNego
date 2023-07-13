import axios from 'axios';

import { baseUrl } from './Api';

const JoinPageAPI = async email => {
  try {
    const res = await axios.post(`${baseUrl}/user/emailvalid`, {
      user: {
        email,
      },
    });
    console.log('res', res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export default JoinPageAPI;
