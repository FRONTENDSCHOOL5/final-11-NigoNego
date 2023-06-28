import React, { useState } from 'react';
import axios from 'axios';
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
  CommonWrapper,
  UploadButtonStyle,
} from './ChatRoomStyle';
import { CommentWrapper } from '../../components/common/Comment/CommentInput/Comment';
import { SImage } from '../../components/common/UserImage/UserImage';
import buttonImg from '../../assets/images/upload-file.svg';
import BodyGlobal from '../../styles/BodyGlobal';

export default function ChatRoom() {
  const [comment, setComment] = useState('');
  const handleCommentChange = event => {
    setComment(event.target.value);
  };
  const isBtnDisable = comment === '';
  return (
    <>
      <HeaderChatNav content="니고네고 공식 판매" />
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
    </>
  );
}
