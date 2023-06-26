import React from 'react';
import { HeaderBasicNav } from '../../components/common/Header/Header';
import Navbar from '../../components/common/Navbar/Navbar';
import ChatUserList from '../../components/Chat/ChatUserList';
import styled from 'styled-components';
import BodyGlobal from './../../styles/BodyGlobal';

const CommonWrapper = styled.section`
  height: 90vh;
  overflow-y: scroll;
`;

function ChatPage() {
  return (
    <>
      <HeaderBasicNav />
      <BodyGlobal>
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
        </CommonWrapper>
      </BodyGlobal>

      <Navbar />
    </>
  );
}

export default ChatPage;
