import React from 'react';
import { HeaderBasicNav } from '../../components/common/Header/Header';
import Navbar from '../../components/common/Navbar/Navbar';
import ChatUserList from '../../components/Chat/ChatUserList';
import styled from 'styled-components';

const CommonWrapper = styled.section`
  height: 80vh;
  overflow-y: scroll;
`;

function ChatPage() {
  return (
    <>
      <HeaderBasicNav />
      <CommonWrapper>
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
      </CommonWrapper>

      <Navbar />
    </>
  );
}

export default ChatPage;
