import React from 'react';
import { HeaderBasicNav } from '../../components/common/Header/Header';
import Navbar from '../../components/common/Navbar/Navbar';
import ChatUserList from '../../components/Chat/ChatUserList';
import styled from 'styled-components';
import BodyGlobal from './../../styles/BodyGlobal';

const CommonWrapper = styled.section``;

function ChatPage() {
  return (
    <>
      <HeaderBasicNav />
      <BodyGlobal>
        <CommonWrapper>
          <ChatUserList userId="" />
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

      <Navbar homeV={true} chatV={false} postV={true} profileV={true} />
    </>
  );
}

export default ChatPage;
