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
      <ImgWrapper>
        <Circle />
        <MImage />
      </ImgWrapper>
      <div className="userInfoText">
        <h2>{userId}</h2>
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
  padding: 10px 10px;
  /* border: 1px solid black; */
  /* box-shadow: inset 0 0 10px red; */
  position: relative;

  time {
    color: var(--basic-border-color);
    margin-left: auto;
    padding-right: 20px;
  }

  cursor: pointer;
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
    p {
      color: var(--basic-grey);
      font-size: 1.2rem;
      margin: 5px 0 0 0;
    }
  }
`;

const ImgWrapper = styled.div``;
const Circle = styled.div`
  width: 15px;
  height: 15px;
  position: relative;
  top: 15px;
  border-radius: 50%;
  background-color: var(--basic-yellow);
  position: absolute;
`;
