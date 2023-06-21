import { axiosPrivate } from 'api/api';

async function getPost() {
  try {
    const res = await axiosPrivate.get(`post/:accountname/userpost`);
    console.log(res)
    // return res.data;
  } catch (err) {
    if (err.response) {
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
    } else {
      console.log(`Error: ${err.message}`);
    }
  }
  return null;
}

export default getPost;
