import React from 'react';
import styled from 'styled-components';
import { MImage } from '../UserImage/UserImage';
import {
  StyledUser,
  ProfileImgWrapper,
  UserSection,
  UserName,
  UserId,
} from './UserSearch';
import testImg from '../../../assets/images/프사.png';
import { SBtn } from '../button/Button';

const Userbutton = styled.div`
  flex-basis: 56px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  margin: 0 0 0 auto;
`;

export default function UserFollow() {
  return (
    // onclick 기능을 추가 클릭시 유저 프로필로 이동
    <StyledUser>
      <ProfileImgWrapper>
        <MImage backgroundUrl={testImg} />
      </ProfileImgWrapper>
      <UserSection>
        <UserName>
          {/* 애월읍을 검색했을때 검색한 부분만 색이 변해야함 */}
          <strong>애월읍</strong>위니브 감귤농장
        </UserName>
        <UserId>@weniv_Mandarin</UserId>
      </UserSection>
      <Userbutton>
        <SBtn />
      </Userbutton>
    </StyledUser>
  );
}
