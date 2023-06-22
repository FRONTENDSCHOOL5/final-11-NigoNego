import React from 'react';
import { HeaderBasicNav } from '../../../components/common/Header/Header';
import Navbar from '../../../components/common/Navbar/Navbar';
import MyProfileHeader from '../../../components/ProfileHeader/MyProfileHeader';
import Product from '../../../components/Product/Product';
import HomePost from '../../../components/HomePost/HomePost';

function MyProfilePage() {
  return (
    <div>
      <HeaderBasicNav />
      <MyProfileHeader />
      <Product />
      <HomePost />
      <Navbar />
    </div>
  );
}

export default MyProfilePage;
