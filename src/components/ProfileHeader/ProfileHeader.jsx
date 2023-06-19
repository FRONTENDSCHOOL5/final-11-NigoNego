import React from 'react';
import styled from 'styled-components';
import FollowBtn from './MyProfileBtn';
import ProfileUser from './ProfileUser';

const ProfileHeaderWrapper = styled.div``;

export default function ProfileHeader() {
  return (
    <ProfileHeaderWrapper>
      <ProfileUser />
      <FollowBtn />
    </ProfileHeaderWrapper>
  );
}
