import axios from 'axios';
import React, { useEffect, useState } from 'react';
import HomePostGridList from './HomePostGridList';
export default function HomePostGrid({ accountname }) {
  const [yourProfileData, setYourProfileData] = useState({});

  useEffect(() => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OGFkMDkxYjJjYjIwNTY2MzM1ZjVmMCIsImV4cCI6MTY5MjAwMjk4NiwiaWF0IjoxNjg2ODE4OTg2fQ.IXRWQpeGB-5D3U3iN4FSKNf2F92wGVA_FLw4SpqLc20';
    try {
      axios({
        method: 'GET',
        url: `https://api.mandarin.weniv.co.kr/post/${accountname}/userpost/?limit=999`,

        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      }).then(response => {
        setYourProfileData(response.data.post);
      });
    } catch (err) {
      console.log('에러');
    }
  }, []);

  return (
    <>
      {yourProfileData.length > 0 && (
        <HomePostGridList userPostData={yourProfileData} />
      )}
    </>
  );
}
