import React from 'react';
import styled from 'styled-components';

// import {
//   StyledUser,
//   ProfileImgWrapper,
//   UserSection,
//   UserName,
//   UserChat,
//   ChatDate,
// } from './ChatUserListStyle';
import { MImage } from '../common/UserImage/UserImage';

export default function ChatUserList() {
  return (
    <ChatUser>
      <MImage />
      <div className="userInfoText">
        <h2>애월읍 위니브 감귤농장</h2>
        <div className="underText">
          <p>text 테스트 원투</p>
          <time>2020.10.25</time>
        </div>
      </div>
    </ChatUser>
  );
}

const ChatUser = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 10px 0;
  /* box-shadow: inset 0 0 10px red; */
  .userInfoText {
    width: 100%;
    margin-left: 12px;
    h2 {
      margin: 0;
      padding: 0;
    }
  }
  .underText {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 4px;
    p,
    time {
      margin: 0;
      padding: 0;
    }
    p {
      color: var(--basic-grey);
    }
    time {
      color: var(--light-grey);
    }
  }
`;
