import { HeaderBasicNav } from '../../../components/common/Header/Header';
import Navbar from '../../../components/common/Navbar/Navbar';
import MyProfileHeader from '../../../components/ProfileHeader/MyProfileHeader';
import Product from '../../../components/Product/Product';
import HomePost from '../../../components/HomePost/HomePost';
import axios from 'axios';
import { useEffect, useState } from 'react';

function MyProfilePage() {
  const [userData, setUserData] = useState('');

  useEffect(() => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OGFkMDkxYjJjYjIwNTY2MzM1ZjVmMCIsImV4cCI6MTY5MjAwMjk4NiwiaWF0IjoxNjg2ODE4OTg2fQ.IXRWQpeGB-5D3U3iN4FSKNf2F92wGVA_FLw4SpqLc20';
    try {
      axios({
        method: 'GET',
        url: `https://api.mandarin.weniv.co.kr/post/nigonego/userpost`,

        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      }).then(response => {
        setUserData(response.data.post);
        console.log(userData);
      });
    } catch (err) {
      console.log('에러');
    }
  }, []);
  return (
    <div>
      <HeaderBasicNav />
      <MyProfileHeader />
      <Product />
      {userData.length > 0 && <HomePost userDataProps={userData} />}
      <Navbar />
    </div>
  );
}

export default MyProfilePage;
