import React from 'react';
import Navbar from '../../../components/common/Navbar/Navbar';
import UserFollow from '../../../components/common/User/UserFollow';
import {HeaderArrow} from '../../../components/common/Header/Header';
import { useRecoilValue } from 'recoil';
import accountNameAtom from '../../../atom/accountName';
import Layout from "../../../styles/Layout";

export default function MyFollowersPage() {
  return (
    <Layout>
        <HeaderArrow />
      {/*<HeaderBasicNav />*/}
      <UserFollow />
      <Navbar homeV={true} chatV={true} postV={true} profileV={false} />
    </Layout>
  );
}
