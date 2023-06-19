import React from 'react';
import styled from 'styled-components';
import { HeaderBasicNav } from '../../../components/common/Header/Header';
import Navbar from '../../../components/common/Navbar/Navbar';
import UserFollow from '../../../components/common/User/UserFollow';

const UserFollowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export default function YourProfileFollowersPage() {
  return (
    <div>
      <HeaderBasicNav />
      <UserFollowWrapper>
        <UserFollow />
        <UserFollow />
        <UserFollow />
        <UserFollow />
        <UserFollow />
      </UserFollowWrapper>
      <Navbar />
    </div>
  );
}
