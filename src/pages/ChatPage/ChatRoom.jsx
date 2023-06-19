import React from 'react';
import { HeaderChatNav } from '../../components/common/Header/Header';
import {
  ChatNavWrapper,
  UploadImageWrapper,
  Chatting,
  ChattingSend,
  ChatUserWrapper,
  ChatMessage,
  ChatMessageTime,
  ChattingWrapper,
  ChatMyWrapper,
  UploadImage,
  MyChatting,
} from './ChatRoomStyle';
import { SImage } from '../../components/common/UserImage/UserImage';

export default function ChatRoom() {
  return (
    <>
      <HeaderChatNav />
      <ChatNavWrapper>
        <UploadImageWrapper>
          <UploadImage />
        </UploadImageWrapper>
        <Chatting>
          <MyChatting placeholder="메시지를 입력" />
          <ChattingSend p>전송</ChattingSend>
        </Chatting>
      </ChatNavWrapper>
      <ChattingWrapper>
        <ChatUserWrapper>
          <SImage />
          <ChatMessage>dtextdtext</ChatMessage>
          <ChatMessageTime>12:39</ChatMessageTime>
        </ChatUserWrapper>
        <ChatUserWrapper>
          <SImage />
          <ChatMessage>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
            eius harum praesentium. Nam, aliquid labore autem asperiores quia
            sapiente sequi ipsa velit praesentium incidunt dicta modi nulla non
            tenetur sequi ipsa velit praesentium incidunt dicta modi nulla non
            tenetur sequi ipsa velit praesentium incidunt dicta modi nulla non
            tenetur sequi ipsa velit praesentium incidunt dicta modi nulla non
            tenetur sequi ipsa velit praesentium incidunt dicta modi nulla non
            tenetur sequi ipsa velit praesentium incidunt dicta modi nulla non
            tenetur sequi ipsa velit praesentium incidunt dicta modi nulla non
            tenetur sequi ipsa velit praesentium incidunt dicta modi nulla non
            tenetur hic! hic!
          </ChatMessage>
          <ChatMessageTime>12:39</ChatMessageTime>
        </ChatUserWrapper>
        <ChatMyWrapper>
          <ChatMessage>hix</ChatMessage>
          <ChatMessageTime>12:39</ChatMessageTime>
        </ChatMyWrapper>
        <ChatMyWrapper>
          <ChatMessage>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
            eius harum praesentium. Nam, aliquid labore autem asperiores quia
            sapiente sequi ipsa velit praesentium incidunt dicta modi nulla non
            tenetur sequi ipsa velit praesentium incidunt dicta modi nulla non
            tenetur sequi ipsa velit praesentium incidunt dicta modi nulla non
            tenetur sequi ipsa velit praesentium incidunt dicta modi nulla non
            tenetur sequi ipsa velit praesentium incidunt dicta modi nulla non
            tenetur sequi ipsa velit praesentium incidunt dicta modi nulla non
            tenetur sequi ipsa velit praesentium incidunt dicta modi nulla non
            tenetur sequi ipsa velit praesentium incidunt dicta modi nulla non
            tenetur hic! hic!
          </ChatMessage>
          <ChatMessageTime>12:39</ChatMessageTime>
        </ChatMyWrapper>
      </ChattingWrapper>
    </>
  );
}
