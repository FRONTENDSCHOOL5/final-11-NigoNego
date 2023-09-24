import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import YourProfileUser from './YourProfileUser';
import YourProfileBtn from './YourProfileBtn';
import UseFetchToken from '../../Hooks/UseFetchToken';
const ProfileHeaderWrapper = styled.div``;

export default function ProfileHeader({ accountname }) {

  return (
    <ProfileHeaderWrapper>
      <YourProfileUser></YourProfileUser>
      {/* {Object.keys(yourProfileData).length > 0 && (
        <YourProfileUser myProfileData={yourProfileData} />
      )}
      {Object.keys(yourProfileData).length > 0 && (
        <YourProfileBtn
          myProfileData={yourProfileData}
          accountname={accountname}
        />
      )} */}
    </ProfileHeaderWrapper>
  );
}
