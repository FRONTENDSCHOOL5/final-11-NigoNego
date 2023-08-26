import React, { useState } from 'react';
import { HeaderSearchNav } from '../../components/common/Header/Header';
import Navbar from '../../components/common/Navbar/Navbar';
import UserSearch from '../../components/common/User/UserSearch';
import Layout from "../../styles/Layout";

import styled from 'styled-components';

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


const SearchWrapper = styled.section`
  height: 88vh;
  width: inherit;
  /* padding: 16px 24px; */
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: scroll;
`;
