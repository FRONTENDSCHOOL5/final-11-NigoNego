import React, { useState } from 'react';
import axios from 'axios';
import { HeaderChatNav } from '../../components/common/Header/Header';
import styled from 'styled-components';
import { CommentWrapper } from '../../components/common/Comment/CommentInput/Comment';
import { SImage } from '../../components/common/UserImage/UserImage';
import buttonImg from '../../assets/images/upload-file.svg';
import BodyGlobal from '../../styles/BodyGlobal';
import Layout from "../../styles/Layout";

export default function ChatRoom() {
  const [comment, setComment] = useState('');
  const handleCommentChange = event => {
    setComment(event.target.value);
  };
  const isBtnDisable = comment === '';
  return (
    <Layout>
      <HeaderChatNav content="니고네고  판매" />
      <BodyGlobal>
        <CommonWrapper>
          <ChatWrapper>
            <SenderWrapper>
              <SImage />
              <SenderMessage>dtextdtext</SenderMessage>
              <ChatMessageTime>12:39</ChatMessageTime>
            </SenderWrapper>
            <SenderWrapper>
              <SImage />
              <SenderMessage>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Numquam eius harum praesentium. Nam, aliquid labore autem
                asperiores quia sapiente sequi ipsa velit praesentium incidunt
                dicta modi nulla non tenetur sequi ipsa velit praesentium
                incidunt dicta modi nulla non tenetur sequi ipsa velit
                praesentium incidunt dicta modi nulla non tenetur sequi ipsa
                velit praesentium incidunt dicta modi nulla non tenetur sequi
                ipsa velit praesentium incidunt dicta modi nulla non tenetur
                sequi ipsa velit praesentium incidunt dicta modi nulla non
                tenetur sequi ipsa velit praesentium incidunt dicta modi nulla
                non tenetur sequi ipsa velit praesentium incidunt dicta modi
                nulla non tenetur hic! hic!
              </SenderMessage>
              <ChatMessageTime>12:39</ChatMessageTime>
            </SenderWrapper>

            <UserWrapper>
              <UserMessage>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Numquam eius harum praesentium. Nam, aliquid labore autem
                asperiores quia sapiente sequi ipsa velit praesentium incidunt
                dicta modi nulla non tenetur sequi ipsa velit praesentium
                incidunt dicta modi nulla non tenetur sequi ipsa velit
                praesentium incidunt dicta modi nulla non tenetur sequi ipsa
                velit praesentium incidunt dicta modi nulla non tenetur sequi
                ipsa velit praesentium incidunt dicta modi nulla non tenetur
                sequi ipsa velit praesentium incidunt dicta modi nulla non
                tenetur sequi ipsa velit praesentium incidunt dicta modi nulla
                non tenetur sequi ipsa velit praesentium incidunt dicta modi
                nulla non tenetur hic! hic!
              </UserMessage>
              <ChatMessageTime>12:39</ChatMessageTime>
            </UserWrapper>
          </ChatWrapper>
        </CommonWrapper>
      </BodyGlobal>
      {/* 하단 전송버튼 */}
      {/* <ChatNav> */}
      {/* <UploadButtonStyle>
          <label htmlFor="input" />
          <input id="input" type="file" onChange={handleImageUpload} />
        </UploadButtonStyle> */}

      <CommentWrapper disableBtn={comment}>
        <form>
          <img src={buttonImg} alt="유저기본이미지" />
          <input
            type="text"
            name="comment"
            value={comment}
            placeholder="메세지 입력하기..."
            onChange={handleCommentChange}
          />
          <button
            className="buttonOnOff"
            type="submit"
            value={comment}
            disabled={isBtnDisable}
          >
            전송
          </button>
        </form>
      </CommentWrapper>
      {/* <ChattingForm>
          <MyChatting placeholder="메시지 입력하기" />
          <ChattingSend>전송</ChattingSend>
        </ChattingForm> */}
      {/* </ChatNav> */}
    </Layout>
  );
}

const CommonWrapper = styled.section``;
const ChatWrapper = styled.div`
  background-color: var('--light-grey');
  display: flex;
  flex-direction: column;
  gap: 9px;
  margin-top: 20px;
`;

// 상대방 메시지
const SenderWrapper = styled.div`
  display: flex;
  gap: 6px;
`;

const ChatMessage = styled.div`
  border: 1px solid #dbdbdb;
  padding: 12px;
  word-wrap: break-word;
  max-width: 60%;
  font-size: 14px;
`;
const SenderMessage = styled(ChatMessage)`
  border-radius: 0px 10px 10px 10px;
`;

const ChatMessageTime = styled.div`
  display: flex;
  align-items: flex-end;
  font-size: 12px;
  color: var(--basic-grey);
`;

// 유저 메시지
const UserWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const UserMessage = styled(ChatMessage)`
  border-radius: 10px 0px 10px 10px;
  background-color: var(--basic-yellow);
  margin-left: 6px;
`;

// 채팅 하단네비바
const ChatNav = styled.nav`
  width: 100%;
  position: fixed;
  bottom: 0px;
  display: flex;
  gap: 25px;
  align-items: center;
  padding: 12px 20px;
  border-top: 1px solid var(--light-grey);
`;

const ChattingForm = styled.form`
  height: inherit;
  width: 100%;
`;
const MyChatting = styled.input`
  height: inherit;
  width: 90%;
  border: 0;
`;

const ChattingSend = styled.button`
  height: inherit;
  width: 10%;
  border: 0;
  color: var(--basic-gray);
`;

export const UploadButtonStyle = styled.div`
  position: fixed;
  /* bottom: 16px; */
  right: 16px;
  label {
    width: 50px;
    height: 50px;
    display: inline-block;
    background-image: url(${buttonImg});
    background-size: cover;
  }

  input {
    display: none;
  }

  input::file-selector-button {
    display: none;
  }
`;