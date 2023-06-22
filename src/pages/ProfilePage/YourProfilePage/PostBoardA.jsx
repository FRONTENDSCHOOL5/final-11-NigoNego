import React from 'react';
import HomePost from '../../../components/HomePost/HomePost';
import UserSearch from '../../../components/common/User/UserSearch';
import Navbar from '../../../components/common/Navbar/Navbar';

export default function PostBoardA() {
  return (
    <div>
      <UserSearch />
      <HomePost />
      <Navbar />
    </div>
  );
}
