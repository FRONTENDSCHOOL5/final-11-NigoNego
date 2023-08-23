import React from 'react';
import Navbar from '../../../components/common/Navbar/Navbar';
import UserFollow from '../../../components/common/User/UserFollow';
import { HeaderBasicNav } from '../../../components/common/Header/Header';
import { useRecoilValue } from 'recoil';
import accountNameAtom from '../../../atom/accountName';
import Layout from "../../../styles/Layout";

export default function MyFollowersPage() {
  return (
    <Layout>
      <HeaderBasicNav />
      <UserFollow />
      <Navbar homeV={true} chatV={true} postV={true} profileV={false} />
    </Layout>
  );
}
