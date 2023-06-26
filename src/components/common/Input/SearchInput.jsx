import React from 'react';
import styled from 'styled-components';

export default function SearchInput() {
  return <SearchInputStyle placeholder="계정 검색" />;
}

const SearchInputStyle = styled.input`
  background: red;
  width: 100%;
  padding: 10px;
  border-radius: 3.2rem;
  background-color: #f2f2f2;
  border: none;
`;
