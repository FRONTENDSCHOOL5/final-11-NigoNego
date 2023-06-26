import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ProfileUser from './ProfileUser';
import MyProfileBtn from './MyProfileBtn';

export default function ProfileHeader({ accountname }) {
  const [myProfileData, setMyProfileData] = useState({});
  useEffect(() => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OGFkMDkxYjJjYjIwNTY2MzM1ZjVmMCIsImV4cCI6MTY5MjAwMjk4NiwiaWF0IjoxNjg2ODE4OTg2fQ.IXRWQpeGB-5D3U3iN4FSKNf2F92wGVA_FLw4SpqLc20';
    try {
      axios({
        method: 'GET',
        url: `https://api.mandarin.weniv.co.kr/profile/${accountname}`,

        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      }).then(response => {
        setMyProfileData(response.data.profile);
        console.log(response);
      });
    } catch (err) {
      console.log('에러');
    }
  }, []);

  const ProfileHeaderWrapper = styled.div``;

  return (
    <ProfileHeaderWrapper>
      {console.log(myProfileData)}
      {Object.keys(myProfileData).length > 0 && (
        <ProfileUser myProfileData={myProfileData} />
      )}
      <MyProfileBtn />
    </ProfileHeaderWrapper>
  );
}
