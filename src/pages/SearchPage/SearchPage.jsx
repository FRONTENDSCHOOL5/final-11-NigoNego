import React from 'react';
import { HeaderSearchNav } from '../../components/common/Header/Header';
import Navbar from '../../components/common/Navbar/Navbar';
import UserSearch from '../../components/common/User/UserSearch';
import SearchWrapper from './SearchPageStyle';

function SearchPage() {
  return (
    <>
      <HeaderSearchNav />
      <SearchWrapper>
        <UserSearch />
        <UserSearch />
        <UserSearch />
        <UserSearch />
        <UserSearch />
        <UserSearch />
        <UserSearch />
        <UserSearch />
        <UserSearch />
        <UserSearch />
        <UserSearch />
        <UserSearch />
      </SearchWrapper>
      <Navbar />
    </>
  );
}

export default SearchPage;
