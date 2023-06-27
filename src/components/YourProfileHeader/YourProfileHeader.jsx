import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import YourProfileUser from './YourProfileUser';
import YourProfileBtn from './YourProfileBtn';
const ProfileHeaderWrapper = styled.div``;

export default function ProfileHeader({ accountname }) {
  const [yourProfileData, setYourProfileData] = useState({});

  useEffect(() => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OGFkMDkxYjJjYjIwNTY2MzM1ZjVmMCIsImV4cCI6MTY5MjAwMjk4NiwiaWF0IjoxNjg2ODE4OTg2fQ.IXRWQpeGB-5D3U3iN4FSKNf2F92wGVA_FLw4SpqLc20';
    try {
      axios({
        method: 'GET',
        // url: `https://api.mandarin.weniv.co.kr/profile/${username}`,
        url: `https://api.mandarin.weniv.co.kr/profile/${accountname}`,

        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      }).then(response => {
        setYourProfileData(response.data.profile);
      });
    } catch (err) {
      console.log('에러');
    }
  }, []);

  return (
    <ProfileHeaderWrapper>
      {Object.keys(yourProfileData).length > 0 && (
        <YourProfileUser myProfileData={yourProfileData} />
      )}
      {Object.keys(yourProfileData).length > 0 && (
        <YourProfileBtn
          myProfileData={yourProfileData}
          accountname={accountname}
        />
      )}
    </ProfileHeaderWrapper>
  );
}
