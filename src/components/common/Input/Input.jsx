import React from 'react';
import styled from 'styled-components';

export default function Input() {
  return <InputStyle placeholder="계정 검색" />;
}

const InputStyle = styled.input`
  background: red;
  width: 80%;
  margin: auto;
  padding: 10px;
  border-radius: 3.2rem;
  background-color: #f2f2f2;
  border: none;
`;
