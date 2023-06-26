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
import { useNavigate } from 'react-router-dom';

export default function ChatUserList({ userId }) {
  const navigate = useNavigate();

  const handleChatClick = () => {
    navigate(`chatroom/${userId}`);
  };
  return (
    <ChatUser onClick={handleChatClick}>
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
      cursor: pointer;
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
