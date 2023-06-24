import React from 'react';
import styled from 'styled-components';
import { MImage } from '../UserImage/UserImage';
import { UserSection, UserName, UserId } from './UserSearch';
import { SBtn } from '../button/Button';
const StyledFollower = styled.section`
  width: 100%;
  padding: 8px 20px;
  display: flex;
  align-items: center;
`;

export default function UserFollow({ data }) {
  return (
    // onclick 기능을 추가 클릭시 유저 프로필로 이동
    <StyledFollower>
      <MImage backgroundUrl={data.author.image} />
      <UserSection>
        <UserName>
          {/* 애월읍을 검색했을때 검색한 부분만 색이 변해야함 */}
          <strong>{data.author.image}</strong>
        </UserName>
        <UserId>{data.author.intro}</UserId>
      </UserSection>
      <SBtn />
    </StyledFollower>
  );
}
