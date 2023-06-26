import React from 'react';
import { HeaderBasicNav } from '../../components/common/Header/Header';
import Navbar from '../../components/common/Navbar/Navbar';
import ChatUserList from '../../components/Chat/ChatUserList';
import UserWrapper from './ChatPageStyle';
import BodyGlobal from '../../styles/BodyGlobal';

function ChatPage() {
  return (
    <>
      <HeaderBasicNav />
      <BodyGlobal>
        <UserWrapper>
          <ChatUserList />
          <ChatUserList />
          <ChatUserList />
          <ChatUserList />
          <ChatUserList />
          <ChatUserList />
          <ChatUserList />
          <ChatUserList />
          <ChatUserList />
          <ChatUserList />
          <ChatUserList />
        </UserWrapper>
      </BodyGlobal>
      <Navbar />
    </>
  );
}

export default ChatPage;
