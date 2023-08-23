import React from 'react';
import { HeaderBasicNav } from '../../components/common/Header/Header';
import Navbar from '../../components/common/Navbar/Navbar';
import ChatUserList from '../../components/Chat/ChatUserList';
import styled from 'styled-components';
import BodyGlobal from './../../styles/BodyGlobal';
import Layout from "../../styles/Layout";

const CommonWrapper = styled.section``;

function ChatPage() {
  return (
    <Layout>
      <HeaderBasicNav />
      <BodyGlobal>
        <CommonWrapper>
          <ChatUserList userId="dummyId" />
          <ChatUserList userId="dummyId1" />
          <ChatUserList userId="dummyId523" />
          <ChatUserList userId="dummyId2" />
          <ChatUserList userId="dummyId3" />
          <ChatUserList userId="dummyId325" />
          <ChatUserList userId="dummyId21" />
          <ChatUserList userId="dummyId43" />
          <ChatUserList userId="dummyId2" />
        </CommonWrapper>
      </BodyGlobal>

      <Navbar homeV={true} chatV={false} postV={true} profileV={true} />
    </Layout>
  );
}

export default ChatPage;
