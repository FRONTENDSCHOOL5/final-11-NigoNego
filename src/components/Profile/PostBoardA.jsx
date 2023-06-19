import React from 'react';
import HomePost from '../HomePost/HomePost';
import UserSearch from '../common/User/UserSearch';
import Navbar from '../common/Navbar/Navbar';

export default function PostBoardA() {
  return (
    <div>
      <UserSearch />
      <HomePost />
      <Navbar />
    </div>
  );
}
