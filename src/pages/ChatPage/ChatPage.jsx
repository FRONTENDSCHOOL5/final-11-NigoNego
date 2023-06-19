import React from 'react';
import { HeaderBasicNav } from '../../components/common/Header/Header';
import Navbar from '../../components/common/Navbar/Navbar';
import ChatUserList from '../../components/Chat/ChatUserList';
import UserWrapper from './ChatPageStyle';

function ChatPage() {
  return (
    <>
      <HeaderBasicNav />
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

      <Navbar />
    </>
  );
}

export default ChatPage;
