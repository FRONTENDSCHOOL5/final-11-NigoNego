import React, { useState } from 'react';
import { HeaderSearchNav } from '../../components/common/Header/Header';
import Navbar from '../../components/common/Navbar/Navbar';
import UserSearch from '../../components/common/User/UserSearch';
import SearchWrapper from './SearchPageStyle';
import Layout from "../../styles/Layout";
function SearchPage() {
  const [data, setdata] = useState(null);
  return (
    <Layout>
      <HeaderSearchNav />
      <SearchWrapper>{data && <UserSearch />}</SearchWrapper>
      <Navbar homeV={false} chatV={true} postV={true} profileV={true} />
    </Layout>
  );
}

export default SearchPage;
