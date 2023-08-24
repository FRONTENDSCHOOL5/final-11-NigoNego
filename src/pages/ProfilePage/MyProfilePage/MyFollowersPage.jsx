import React from 'react';
import Navbar from '../../../components/common/Navbar/Navbar';
import UserFollow from '../../../components/common/User/UserFollow';
import { HeaderBasicNav } from '../../../components/common/Header/Header';
import { useRecoilValue } from 'recoil';
import accountNameAtom from '../../../atom/accountName';
import Layout from '../../../styles/Layout';
import { useLocation } from 'react-router-dom';

export default function MyFollowersPage() {
  const location = useLocation();
  console.log(location);
  return (
    <Layout>
      <HeaderBasicNav />
      <UserFollow followUserData={location} />
      <Navbar homeV={true} chatV={true} postV={true} profileV={false} />
    </Layout>
  );
}
