import React from 'react';
import styled from 'styled-components';
import { MImage } from '../UserImage/UserImage';

export const StyledUser = styled.div`
  height: 5rem;
  width: 100%;
  max-width: 50rem;
  display: flex;
  strong {
    color: var(--basic-orange);
  }
`;

export const ProfileImgWrapper = styled.div`
  width: 5rem;
  flex-shrink: 0;
`;

export const UserSection = styled.section`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  padding-left: 1.2rem;
`;

export const UserName = styled.div`
  width: 100%;
  flex-basis: 50%;
  line-height: 2.5rem;
  font-size: 14px;
`;

export const UserId = styled.div`
  flex-basis: 50%;
  line-height: 2.5rem;
  font-size: 12px;
  color: var(--basic-grey);
`;

export default function UserSearch({ data }) {
  console.log(data.author);
  console.log(data.image);
  return (
    // 클릭시 유저 프로필로 이동하는 기능 추가
    <StyledUser>
      <ProfileImgWrapper>
        <MImage backgroundUrl={data.image} />
      </ProfileImgWrapper>
      <UserSection>
        <UserName>
          {/* 애월읍을 검색했을때 검색한 부분만 색이 변해야함 */}
          <strong>애월읍</strong>위니브 감귤농장
        </UserName>
        <UserId>{data.author.accountname}</UserId>
      </UserSection>
    </StyledUser>
  );
}
