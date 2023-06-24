import React, { useEffect } from 'react';
import MyHomePost from '../../../components/HomePost/MyHomePost';
import Product from '../../../components/Product/Product';
import ProfileHeader from '../../../components/ProfileHeader/ProfileHeader';
import Navbar from '../../../components/common/Navbar/Navbar';
export default function MyProfilePage() {
  useEffect(() => {}, []);
  return (
    <div>
      <ProfileHeader />
      <Product />
      <MyHomePost />
      <Navbar />
    </div>
  );
}
