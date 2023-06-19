import React from 'react';
import styled from 'styled-components';
import ModifiedBtn from './ModifiedBtn';
import ProfileUser from './ProfileUser';

const MyProfileHeaderWrapper = styled.div``;

export default function YourProfileHeader() {
  return (
    <MyProfileHeaderWrapper>
      <ProfileUser />
      <ModifiedBtn />
    </MyProfileHeaderWrapper>
  );
}
