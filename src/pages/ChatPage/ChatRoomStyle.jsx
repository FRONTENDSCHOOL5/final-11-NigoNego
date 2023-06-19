import styled from 'styled-components';

const ChatWrapper = styled.div`
  background-color: var('--light-grey');
  display: flex;
  flex-direction: column;
  height: 90vh;
`;

// 상대방 메시지
const SenderWrapper = styled.div`
  display: flex;
  gap: 12px;
  /* padding-top: 10px;
  padding-left: 12px;
  padding-right: 50px; */
`;

const ChatMessage = styled.div`
  border: 1px solid black;
  padding: 12px;
  word-wrap: break-word;
  max-width: 70%;
  font-size: 14px;
`;
const SenderMessage = styled(ChatMessage)`
  border-radius: 0px 10px 10px 10px;
`;

const ChatMessageTime = styled.div`
  display: flex;
  align-items: flex-end;
  font-size: 12px;
`;

// 유저 메시지
const UserWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 12px;
  padding-top: 10px;
  /* padding-left: 12px;
  padding-right: 50px; */
`;

const UserMessage = styled(ChatMessage)`
  border-radius: 10px 0px 10px 10px;
  background-color: var(--basic-yellow);
`;

// 채팅 하단네비바
const ChatNav = styled.nav`
  width: 100%;
  height: 4.8rem;
  border-top: 1px solid var(--basic-border-color);
  color: var(--basic-grey);
  position: fixed;
  bottom: 0px;
  display: flex;
  /* padding-left: 20px; */
  /* padding-right: 20px; */
`;

const UploadImageWrapper = styled.div`
  background-color: #ccc;
  height: inherit;
  width: 50px;
  text-align: center;
`;

const UploadImage = styled.button`
  width: 4.8rem;
  height: inherit;
  border-radius: 50%;
`;

const ChattingForm = styled.form`
  height: inherit;
  border: 1px solid black;
  flex-grow: 8;
  font-size: 16px;
`;
const MyChatting = styled.input`
  width: 90%;
  height: inherit;
`;

const ChattingSend = styled.button`
  width: 10%;
  height: inherit;
  /* border: none; */
`;

export {
  SenderWrapper,
  UploadImageWrapper,
  ChattingForm,
  ChattingSend,
  ChatMessage,
  ChatMessageTime,
  ChatWrapper,
  ChatNav,
  UserWrapper,
  UploadImage,
  MyChatting,
  SenderMessage,
  UserMessage,
};
