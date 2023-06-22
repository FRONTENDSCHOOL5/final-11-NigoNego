import React from 'react';
import axios from 'axios';
import { HeaderBasicNav } from '../../components/common/Header/Header';
import Navbar from '../../components/common/Navbar/Navbar';
import { useState, useEffect } from 'react';
function HomeFeed() {
  // GET
  const [followersData, setFollowersData] = useState('');
  useEffect(() => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OGFkMDkxYjJjYjIwNTY2MzM1ZjVmMCIsImV4cCI6MTY5MjAwMjk4NiwiaWF0IjoxNjg2ODE4OTg2fQ.IXRWQpeGB-5D3U3iN4FSKNf2F92wGVA_FLw4SpqLc20';
    try {
      axios({
        method: 'GET',
        url: `https://api.mandarin.weniv.co.kr/profile/real_binky`,

        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      }).then(response => {
        setFollowersData(response.data.profile);
        console.log(response);
      });
    } catch (err) {
      console.log('에러');
    }
  }, []);
  return (
    <>
      <HeaderBasicNav />
      <div>{followresData}</div>
      <Navbar />
    </>
  );
}

export default HomeFeed;
