import React from 'react';
import {
  StyledUser,
  ProfileImgWrapper,
  UserSection,
  UserName,
  UserChat,
  ChatDate,
} from './ChatUserListStyle';
import { MImage } from '../common/UserImage/UserImage';

export default function ChatUserList() {
  return (
    <StyledUser>
      <ProfileImgWrapper>
        <MImage />
      </ProfileImgWrapper>
      <UserSection>
        <UserName>애월읍 위니브 감귤농장</UserName>
        <UserChat>text 테스트 원투</UserChat>
      </UserSection>
      <ChatDate>2020.10.25</ChatDate>
    </StyledUser>
  );
}
