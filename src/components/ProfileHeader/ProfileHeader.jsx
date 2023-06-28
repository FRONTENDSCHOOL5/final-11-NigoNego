import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ProfileUser from './ProfileUser';
import MyProfileBtn from './MyProfileBtn';
import { useRecoilValue } from 'recoil';
import { accountNameAtom, authAtom } from '../../atom/atoms';
export default function ProfileHeader() {
  const [myProfileData, setMyProfileData] = useState({});
  const auth = useRecoilValue(authAtom);
  const accountname = useRecoilValue(accountNameAtom);

  useEffect(() => {
    try {
      axios({
        method: 'GET',
        url: `https://api.mandarin.weniv.co.kr/profile/${accountname}`,

        headers: {
          Authorization: `Bearer ${auth}`,
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
