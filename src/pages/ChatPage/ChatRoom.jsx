import React from 'react';
import { HeaderChatNav } from '../../components/common/Header/Header';
import {
  ChatNav,
  UploadImageWrapper,
  ChattingForm,
  ChattingSend,
  SenderWrapper,
  ChatMessageTime,
  ChatWrapper,
  UserWrapper,
  UploadImage,
  MyChatting,
  SenderMessage,
  UserMessage,
} from './ChatRoomStyle';
import { SImage } from '../../components/common/UserImage/UserImage';

export default function ChatRoom() {
  return (
    <>
      <HeaderChatNav />

      <ChatWrapper>
        <SenderWrapper>
          <SImage />
          <SenderMessage>dtextdtext</SenderMessage>
          <ChatMessageTime>12:39</ChatMessageTime>
        </SenderWrapper>
        <SenderWrapper>
          <SImage />
          <SenderMessage>
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
          </SenderMessage>
          <ChatMessageTime>12:39</ChatMessageTime>
        </SenderWrapper>

        <UserWrapper>
          <UserMessage>
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
          </UserMessage>
          <ChatMessageTime>12:39</ChatMessageTime>
        </UserWrapper>
      </ChatWrapper>

      {/* 하단 전송버튼 */}
      <ChatNav>
        <UploadImageWrapper>
          <UploadImage />
        </UploadImageWrapper>
        <ChattingForm>
          <MyChatting placeholder="메시지 입력하기" />
          <ChattingSend p>전송</ChattingSend>
        </ChattingForm>
      </ChatNav>
    </>
  );
}
