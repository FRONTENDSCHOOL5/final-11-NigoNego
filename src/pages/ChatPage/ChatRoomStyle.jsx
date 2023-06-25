import styled from 'styled-components';

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
`;

const ChatMessage = styled.div`
  border: 1px solid #dbdbdb;
  padding: 12px;
  word-wrap: break-word;
  max-width: 70%;
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
const UserWrapper = styled(ChatMessageTime)`
  flex-direction: row-reverse;
`;

const UserMessage = styled(ChatMessage)`
  border-radius: 10px 0px 10px 10px;
  background-color: var(--basic-yellow);
`;

// 채팅 하단네비바
const ChatNav = styled.nav`
  width: 100%;
  height: 4.8rem;
  position: fixed;
  bottom: 0px;
  display: flex;
  gap: 25px;
  align-items: center;
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

export {
  SenderWrapper,
  ChattingForm,
  ChattingSend,
  ChatMessage,
  ChatMessageTime,
  ChatWrapper,
  ChatNav,
  UserWrapper,
  MyChatting,
  SenderMessage,
  UserMessage,
};
