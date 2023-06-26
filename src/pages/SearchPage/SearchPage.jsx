import React, { useState } from 'react';
import { HeaderSearchNav } from '../../components/common/Header/Header';
import Navbar from '../../components/common/Navbar/Navbar';
import UserSearch from '../../components/common/User/UserSearch';
import SearchWrapper from './SearchPageStyle';

function SearchPage() {
  const [data, setdata] = useState(null);
  return (
    <>
      <HeaderSearchNav />
      <SearchWrapper>{data && <UserSearch />}</SearchWrapper>
      <Navbar />
    </>
  );
}

export default SearchPage;
