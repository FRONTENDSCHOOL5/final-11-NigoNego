import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import FollowBtn from './MyProfileBtn';
import ProfileUser from './ProfileUser';

const ProfileHeaderWrapper = styled.div``;

export default function ProfileHeader() {
  const [myProfileData, setMyProfileData] = useState(null);
  useEffect(() => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OGFkMDkxYjJjYjIwNTY2MzM1ZjVmMCIsImV4cCI6MTY5MjAwMjk4NiwiaWF0IjoxNjg2ODE4OTg2fQ.IXRWQpeGB-5D3U3iN4FSKNf2F92wGVA_FLw4SpqLc20';
    try {
      axios({
        method: 'GET',
        url: `https://api.mandarin.weniv.co.kr/profile/nigonego`,

        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      }).then(response => {
        setMyProfileData(response.data);
        // console.log(response);
      });
    } catch (err) {
      console.log('에러');
    }
  }, []);

  return (
    <ProfileHeaderWrapper>
      {myProfileData && <ProfileUser myProfileData={myProfileData} />}
      <FollowBtn />
    </ProfileHeaderWrapper>
  );
}
