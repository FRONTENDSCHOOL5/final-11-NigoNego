import React from 'react';
import styled from 'styled-components';

const FollowNumberWrapper = styled.div`
  /* box-shadow: inset 0 0 10px purple; */
  padding: 20px 12px;
`;

export default function FollowNumber() {
  return (
    <FollowNumberWrapper>
      <h3>2094</h3>
      <small>followers</small>
    </FollowNumberWrapper>
  );
}
